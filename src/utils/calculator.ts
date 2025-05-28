import type { ParentStatus, HouseholdStatus, CalculationResult } from '../types';

export function calculateParentPoints(status: ParentStatus): number {
  const { employment } = status;
  
  switch (employment.type) {
    case 'employed':
      if (!employment.hours) return 0;
      if (employment.hours >= 160) return 20;
      if (employment.hours >= 140) return 19;
      if (employment.hours >= 120) return 18;
      if (employment.hours >= 100) return 17;
      if (employment.hours >= 80) return 16;
      if (employment.hours >= 64) return 15;
      return 0;
    
    case 'job_seeking':
      return 12;
    
    case 'pregnancy_birth':
      return 20;
    
    case 'illness_disability':
      switch (employment.illness_type) {
        case 'hospitalization_1month':
        case 'home_bedrest':
        case 'disability_severe':
          return 20;
        case 'disability_moderate':
          return 18;
        case 'home_chronic':
        case 'disability_other':
          return 16;
        default:
          return 0;
      }
    
    case 'caregiving':
    case 'disaster_recovery':
    case 'studying':
      if (!employment.hours) return 15;
      if (employment.hours >= 160) return 20;
      if (employment.hours >= 140) return 19;
      if (employment.hours >= 120) return 18;
      if (employment.hours >= 100) return 17;
      if (employment.hours >= 80) return 16;
      return 15;
    
    case 'single_parent':
      // 他の状況から算出される点数と40点を比較し、高い方を適用
      const otherPoints = calculateParentPoints({
        employment: { 
          ...employment, 
          type: 'employed' // デフォルトとして就労で計算
        }
      });
      return Math.max(otherPoints, 40);
    
    case 'other':
      return 8;
    
    default:
      return 0;
  }
}

export function calculateAdjustmentPoints(household: HouseholdStatus): number {
  let points = 0;
  
  // 加点項目
  if (household.singleParent) points += 15;
  if (household.siblingEnrolled) points += 5;
  if (household.siblingSimultaneousApplication) points += 3;
  if (household.multipleChild) points += 3;
  if (household.threeOrMoreChildren) points += 2;
  if (household.transferWithSibling) points += 8;
  if (household.singleParentNoGrandparents) points += 5;
  if (household.previousYearRejected) points += 2;
  if (household.previousTwoYearsRejected) points += 2; // 上記に加算
  if (household.maternityLeaveReturning) points += 8;
  if (household.unlicensedFacilityUsage) points += 4;
  if (household.nurseryStaff120Plus) points += 20;
  if (household.nurseryStaff64To119) points += 15;
  if (household.nurseNutritionistCook) points += 5;
  if (household.kindergartenStaff) points += 10;
  if (household.parentAbsent) points += 2;
  if (household.childWithDisability) points += 4;
  if (household.welfareRecipient) points += 6;
  if (household.childWelfareSpecial) points += 30;
  
  // 減点項目
  if (household.employmentPending) points -= 2;
  if (household.tuitionDelinquent) points -= 16;
  if (household.outsideCity) points -= 20;
  if (household.offerDeclined) points -= 2;
  if (household.maternityLeaveExtension) points -= 50;
  
  return points;
}

export function calculateTotalPoints(
  fatherStatus: ParentStatus,
  motherStatus: ParentStatus,
  householdStatus: HouseholdStatus
): CalculationResult {
  let fatherPoints = calculateParentPoints(fatherStatus);
  let motherPoints = calculateParentPoints(motherStatus);
  
  // ひとり親世帯の特別規定
  if (householdStatus.singleParent) {
    if (fatherStatus.employment.type === 'single_parent') {
      motherPoints = 0;
    } else if (motherStatus.employment.type === 'single_parent') {
      fatherPoints = 0;
    }
  }
  
  // 基本点数の上限40点
  const basicPointsTotal = Math.min(fatherPoints + motherPoints, 40);
  
  const adjustmentPoints = calculateAdjustmentPoints(householdStatus);
  const totalPoints = basicPointsTotal + adjustmentPoints;
  
  return {
    fatherPoints,
    motherPoints,
    basicPointsTotal,
    adjustmentPoints,
    totalPoints
  };
}

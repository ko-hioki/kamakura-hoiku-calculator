export interface ParentStatus {
  employment: {
    type: 'employed' | 'job_seeking' | 'pregnancy_birth' | 'illness_disability' | 'caregiving' | 'disaster_recovery' | 'studying' | 'single_parent' | 'other' | 'none';
    hours?: number;
    illness_type?: 'hospitalization_1month' | 'home_bedrest' | 'home_chronic' | 'disability_severe' | 'disability_moderate' | 'disability_other';
  };
}

export interface HouseholdStatus {
  singleParent: boolean;
  siblingEnrolled: boolean;
  siblingSimultaneousApplication: boolean;
  multipleChild: boolean;
  threeOrMoreChildren: boolean;
  transferWithSibling: boolean;
  singleParentNoGrandparents: boolean;
  previousYearRejected: boolean;
  previousTwoYearsRejected: boolean;
  maternityLeaveReturning: boolean;
  unlicensedFacilityUsage: boolean;
  nurseryStaff120Plus: boolean;
  nurseryStaff64To119: boolean;
  nurseNutritionistCook: boolean;
  kindergartenStaff: boolean;
  parentAbsent: boolean;
  childWithDisability: boolean;
  welfareRecipient: boolean;
  childWelfareSpecial: boolean;
  employmentPending: boolean;
  tuitionDelinquent: boolean;
  outsideCity: boolean;
  offerDeclined: boolean;
  maternityLeaveExtension: boolean;
}

export interface CalculationResult {
  fatherPoints: number;
  motherPoints: number;
  basicPointsTotal: number;
  adjustmentPoints: number;
  totalPoints: number;
}

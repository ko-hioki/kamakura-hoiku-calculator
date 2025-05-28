import { useState, useEffect } from 'react';
import type { ParentStatus, HouseholdStatus, CalculationResult } from './types';
import { ParentForm } from './components/ParentForm';
import { HouseholdForm } from './components/HouseholdForm';
import { ResultDisplay } from './components/ResultDisplay';
import { calculateTotalPoints } from './utils/calculator';
import './App.css';

const initialParentStatus: ParentStatus = {
  employment: {
    type: 'none'
  }
};

const initialHouseholdStatus: HouseholdStatus = {
  singleParent: false,
  siblingEnrolled: false,
  siblingSimultaneousApplication: false,
  multipleChild: false,
  threeOrMoreChildren: false,
  transferWithSibling: false,
  singleParentNoGrandparents: false,
  previousYearRejected: false,
  previousTwoYearsRejected: false,
  maternityLeaveReturning: false,
  unlicensedFacilityUsage: false,
  nurseryStaff120Plus: false,
  nurseryStaff64To119: false,
  nurseNutritionistCook: false,
  kindergartenStaff: false,
  parentAbsent: false,
  childWithDisability: false,
  welfareRecipient: false,
  childWelfareSpecial: false,
  employmentPending: false,
  tuitionDelinquent: false,
  outsideCity: false,
  offerDeclined: false,
  maternityLeaveExtension: false
};

function App() {
  const [fatherStatus, setFatherStatus] = useState<ParentStatus>(initialParentStatus);
  const [motherStatus, setMotherStatus] = useState<ParentStatus>(initialParentStatus);
  const [householdStatus, setHouseholdStatus] = useState<HouseholdStatus>(initialHouseholdStatus);
  const [result, setResult] = useState<CalculationResult | null>(null);

  useEffect(() => {
    const calculatedResult = calculateTotalPoints(fatherStatus, motherStatus, householdStatus);
    setResult(calculatedResult);
  }, [fatherStatus, motherStatus, householdStatus]);

  const handleReset = () => {
    setFatherStatus(initialParentStatus);
    setMotherStatus(initialParentStatus);
    setHouseholdStatus(initialHouseholdStatus);
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="header-text">
            <h1>鎌倉市保育所等利用調整点数計算ツール</h1>
            <p>令和7年度4月入所から適用</p>
          </div>
          <button className="reset-button" onClick={handleReset} type="button">
            すべてリセット
          </button>
        </div>
      </header>

      <main className="main">
        <form>
          <ParentForm
            title="父の状況"
            status={fatherStatus}
            onChange={setFatherStatus}
          />
          
          <ParentForm
            title="母の状況"
            status={motherStatus}
            onChange={setMotherStatus}
          />
          
          <HouseholdForm
            status={householdStatus}
            onChange={setHouseholdStatus}
          />
        </form>

        {result && <ResultDisplay result={result} />}
      </main>

      <footer className="footer">
        <p>令和7年度4月入所から適用の鎌倉市利用調整基準表に基づく仕様</p>
      </footer>
    </div>
  );
}

export default App;

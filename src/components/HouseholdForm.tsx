import React from 'react';
import type { HouseholdStatus } from '../types';

interface Props {
  status: HouseholdStatus;
  onChange: (status: HouseholdStatus) => void;
}

export const HouseholdForm: React.FC<Props> = ({ status, onChange }) => {
  const handleChange = (key: keyof HouseholdStatus, value: boolean) => {
    onChange({
      ...status,
      [key]: value
    });
  };

  return (
    <fieldset>
      <legend>世帯の状況（調整点数）</legend>
      
      <h4>加点項目</h4>
      
      <div>
        <label>
          <input
            type="checkbox"
            checked={status.singleParent}
            onChange={(e) => handleChange('singleParent', e.target.checked)}
          />
          ひとり親世帯その他これに準ずる世帯 (+15点)
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={status.siblingEnrolled}
            onChange={(e) => handleChange('siblingEnrolled', e.target.checked)}
          />
          すでに兄弟姉妹が利用している (+5点)
        </label>
        <small>入所希望月に鎌倉市内認可保育所等に在園する場合に限る。転園申込には加点しない</small>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={status.siblingSimultaneousApplication}
            onChange={(e) => handleChange('siblingSimultaneousApplication', e.target.checked)}
          />
          兄弟姉妹同時に利用申請が出ている（2人以上） (+3点)
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={status.multipleChild}
            onChange={(e) => handleChange('multipleChild', e.target.checked)}
          />
          申請児童が多胎児である (+3点)
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={status.threeOrMoreChildren}
            onChange={(e) => handleChange('threeOrMoreChildren', e.target.checked)}
          />
          入所希望の年度の4月1日時点で、生計を一にする18歳未満の児童が3人以上の世帯 (+2点)
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={status.transferWithSibling}
            onChange={(e) => handleChange('transferWithSibling', e.target.checked)}
          />
          転園を希望している (+8点)
        </label>
        <small>当該児童が転園を希望している園に、兄弟姉妹が在園している場合に限る</small>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={status.singleParentNoGrandparents}
            onChange={(e) => handleChange('singleParentNoGrandparents', e.target.checked)}
          />
          ひとり親世帯その他これに準ずる世帯で、入所希望の年度の4月1日時点で65歳未満の祖父母等と、同じ住所に住んでない場合 (+5点)
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={status.previousYearRejected}
            onChange={(e) => handleChange('previousYearRejected', e.target.checked)}
          />
          前年度入所不承認である (+2点)
        </label>
        <small>令和7年度適用。令和8年度以降変更予定あり</small>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={status.previousTwoYearsRejected}
            onChange={(e) => handleChange('previousTwoYearsRejected', e.target.checked)}
          />
          前年度、前々年度も入所不承認である (+2点)
        </label>
        <small>令和7年度適用。令和8年度以降廃止予定（上記に加算）</small>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={status.maternityLeaveReturning}
            onChange={(e) => handleChange('maternityLeaveReturning', e.target.checked)}
          />
          産前・産後休業または育児休業中で、復職予定である (+8点)
        </label>
        <small>既に復職している方を含む</small>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={status.unlicensedFacilityUsage}
            onChange={(e) => handleChange('unlicensedFacilityUsage', e.target.checked)}
          />
          認可外保育施設等を利用している (+4点)
        </label>
        <small>保育を必要とする要件があり、申込み児童が、認可外保育施設やベビーシッター等を月64時間以上、有償で利用している実績が審査基準日から起算して30日以上ある</small>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={status.nurseryStaff120Plus}
            onChange={(e) => handleChange('nurseryStaff120Plus', e.target.checked)}
          />
          市内の保育所等で、保育士として就労(内定)している場合（月120時間以上） (+20点)
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={status.nurseryStaff64To119}
            onChange={(e) => handleChange('nurseryStaff64To119', e.target.checked)}
          />
          市内の保育所等で、保育士として就労(内定)している場合（月64時間以上、120時間未満） (+15点)
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={status.nurseNutritionistCook}
            onChange={(e) => handleChange('nurseNutritionistCook', e.target.checked)}
          />
          市内の保育所等で、看護師、栄養士又は調理師として就労(内定)している場合 (+5点)
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={status.kindergartenStaff}
            onChange={(e) => handleChange('kindergartenStaff', e.target.checked)}
          />
          市内の幼稚園等で、幼稚園教諭又は保育士として就労している場合 (+10点)
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={status.parentAbsent}
            onChange={(e) => handleChange('parentAbsent', e.target.checked)}
          />
          保護者が単身赴任や長期入院など昼夜問わずに不在であることが確定している場合 (+2点)
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={status.childWithDisability}
            onChange={(e) => handleChange('childWithDisability', e.target.checked)}
          />
          児童又は同居の兄弟姉妹が障害を有する場合 (+4点)
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={status.welfareRecipient}
            onChange={(e) => handleChange('welfareRecipient', e.target.checked)}
          />
          生活保護法による被保護世帯である (+6点)
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={status.childWelfareSpecial}
            onChange={(e) => handleChange('childWelfareSpecial', e.target.checked)}
          />
          児童福祉の観点から、特に保育の実施が必要と判断される場合 (+30点)
        </label>
      </div>

      <h4>減点項目</h4>

      <div>
        <label>
          <input
            type="checkbox"
            checked={status.employmentPending}
            onChange={(e) => handleChange('employmentPending', e.target.checked)}
          />
          保護者が就労内定者（就学予定者）である (-2点)
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={status.tuitionDelinquent}
            onChange={(e) => handleChange('tuitionDelinquent', e.target.checked)}
          />
          兄弟姉妹の保育料に正当な理由がなく6箇月分以上滞納がある (-16点)
        </label>
        <small>卒園した者も含む</small>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={status.outsideCity}
            onChange={(e) => handleChange('outsideCity', e.target.checked)}
          />
          市外居住者である (-20点)
        </label>
        <small>転入予定の者を除く</small>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={status.offerDeclined}
            onChange={(e) => handleChange('offerDeclined', e.target.checked)}
          />
          内定を辞退している (-2点)
        </label>
        <small>翌年度の審査まで継続。令和8年度以降変更予定あり</small>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={status.maternityLeaveExtension}
            onChange={(e) => handleChange('maternityLeaveExtension', e.target.checked)}
          />
          育児休業の延長を許容している (-50点)
        </label>
        <small>待機期間にカウントしない</small>
      </div>
    </fieldset>
  );
};

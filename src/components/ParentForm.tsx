import React from 'react';
import type { ParentStatus } from '../types';

interface Props {
  title: string;
  status: ParentStatus;
  onChange: (status: ParentStatus) => void;
}

export const ParentForm: React.FC<Props> = ({ title, status, onChange }) => {
  const handleTypeChange = (type: ParentStatus['employment']['type']) => {
    onChange({
      ...status,
      employment: {
        ...status.employment,
        type,
        hours: type === 'employed' || type === 'caregiving' || type === 'disaster_recovery' || type === 'studying' ? status.employment.hours : undefined,
        illness_type: type === 'illness_disability' ? status.employment.illness_type : undefined
      }
    });
  };

  const handleHoursChange = (hours: number) => {
    onChange({
      ...status,
      employment: {
        ...status.employment,
        hours
      }
    });
  };

  const handleIllnessTypeChange = (illness_type: NonNullable<ParentStatus['employment']['illness_type']>) => {
    onChange({
      ...status,
      employment: {
        ...status.employment,
        illness_type
      }
    });
  };

  return (
    <fieldset>
      <legend>{title}</legend>
      
      <div>
        <label>
          <input
            type="radio"
            name={`${title}-type`}
            checked={status.employment.type === 'employed'}
            onChange={() => handleTypeChange('employed')}
          />
          就労（就労内定者を含む）
        </label>
        {status.employment.type === 'employed' && (
          <div style={{ marginLeft: '20px' }}>
            <label>
              月の勤務時間:
              <select
                value={status.employment.hours || ''}
                onChange={(e) => handleHoursChange(Number(e.target.value))}
              >
                <option value="">選択してください</option>
                <option value="160">160時間以上 (20点)</option>
                <option value="140">140時間以上160時間未満 (19点)</option>
                <option value="120">120時間以上140時間未満 (18点)</option>
                <option value="100">100時間以上120時間未満 (17点)</option>
                <option value="80">80時間以上100時間未満 (16点)</option>
                <option value="64">64時間以上80時間未満 (15点)</option>
              </select>
            </label>
          </div>
        )}
      </div>

      <div>
        <label>
          <input
            type="radio"
            name={`${title}-type`}
            checked={status.employment.type === 'job_seeking'}
            onChange={() => handleTypeChange('job_seeking')}
          />
          求職活動中 (12点)
        </label>
      </div>

      {title === '母の状況' && (
        <div>
          <label>
            <input
              type="radio"
              name={`${title}-type`}
              checked={status.employment.type === 'pregnancy_birth'}
              onChange={() => handleTypeChange('pregnancy_birth')}
            />
            妊娠・出産 (20点)
          </label>
        </div>
      )}

      <div>
        <label>
          <input
            type="radio"
            name={`${title}-type`}
            checked={status.employment.type === 'illness_disability'}
            onChange={() => handleTypeChange('illness_disability')}
          />
          疾病・負傷・障害
        </label>
        {status.employment.type === 'illness_disability' && (
          <div style={{ marginLeft: '20px' }}>
            <label>
              <input
                type="radio"
                name={`${title}-illness`}
                checked={status.employment.illness_type === 'hospitalization_1month'}
                onChange={() => handleIllnessTypeChange('hospitalization_1month')}
              />
              入院（1箇月以上） (20点)
            </label>
            <label>
              <input
                type="radio"
                name={`${title}-illness`}
                checked={status.employment.illness_type === 'home_bedrest'}
                onChange={() => handleIllnessTypeChange('home_bedrest')}
              />
              自宅療養（常時病臥） (20点)
            </label>
            <label>
              <input
                type="radio"
                name={`${title}-illness`}
                checked={status.employment.illness_type === 'home_chronic'}
                onChange={() => handleIllnessTypeChange('home_chronic')}
              />
              自宅療養（慢性疾患等で医師から指示） (16点)
            </label>
            <label>
              <input
                type="radio"
                name={`${title}-illness`}
                checked={status.employment.illness_type === 'disability_severe'}
                onChange={() => handleIllnessTypeChange('disability_severe')}
              />
              心身障害（身体障害者手帳1・2級、療育手帳A1・A2、精神障害者保健福祉手帳1～3級） (20点)
            </label>
            <label>
              <input
                type="radio"
                name={`${title}-illness`}
                checked={status.employment.illness_type === 'disability_moderate'}
                onChange={() => handleIllnessTypeChange('disability_moderate')}
              />
              心身障害（身体障害者手帳3・4級、療育手帳B1・B2） (18点)
            </label>
            <label>
              <input
                type="radio"
                name={`${title}-illness`}
                checked={status.employment.illness_type === 'disability_other'}
                onChange={() => handleIllnessTypeChange('disability_other')}
              />
              上記以外で心身に障害があり保育が困難な場合 (16点)
            </label>
          </div>
        )}
      </div>

      <div>
        <label>
          <input
            type="radio"
            name={`${title}-type`}
            checked={status.employment.type === 'caregiving'}
            onChange={() => handleTypeChange('caregiving')}
          />
          介護・看護
        </label>
        {status.employment.type === 'caregiving' && (
          <div style={{ marginLeft: '20px' }}>
            <label>
              月の介護・看護時間:
              <select
                value={status.employment.hours || ''}
                onChange={(e) => handleHoursChange(Number(e.target.value))}
              >
                <option value="">選択してください</option>
                <option value="160">160時間以上 (20点)</option>
                <option value="140">140時間以上160時間未満 (19点)</option>
                <option value="120">120時間以上140時間未満 (18点)</option>
                <option value="100">100時間以上120時間未満 (17点)</option>
                <option value="80">80時間以上100時間未満 (16点)</option>
                <option value="64">64時間以上80時間未満 (15点)</option>
              </select>
            </label>
          </div>
        )}
      </div>

      <div>
        <label>
          <input
            type="radio"
            name={`${title}-type`}
            checked={status.employment.type === 'disaster_recovery'}
            onChange={() => handleTypeChange('disaster_recovery')}
          />
          災害復旧
        </label>
        {status.employment.type === 'disaster_recovery' && (
          <div style={{ marginLeft: '20px' }}>
            <label>
              月の復旧時間:
              <select
                value={status.employment.hours || ''}
                onChange={(e) => handleHoursChange(Number(e.target.value))}
              >
                <option value="">選択してください</option>
                <option value="160">160時間以上 (20点)</option>
                <option value="140">140時間以上160時間未満 (19点)</option>
                <option value="120">120時間以上140時間未満 (18点)</option>
                <option value="100">100時間以上120時間未満 (17点)</option>
                <option value="80">80時間以上100時間未満 (16点)</option>
                <option value="64">64時間以上80時間未満 (15点)</option>
              </select>
            </label>
          </div>
        )}
      </div>

      <div>
        <label>
          <input
            type="radio"
            name={`${title}-type`}
            checked={status.employment.type === 'studying'}
            onChange={() => handleTypeChange('studying')}
          />
          就学（就学予定者を含む）
        </label>
        {status.employment.type === 'studying' && (
          <div style={{ marginLeft: '20px' }}>
            <label>
              月の就学時間:
              <select
                value={status.employment.hours || ''}
                onChange={(e) => handleHoursChange(Number(e.target.value))}
              >
                <option value="">選択してください</option>
                <option value="160">160時間以上 (20点)</option>
                <option value="140">140時間以上160時間未満 (19点)</option>
                <option value="120">120時間以上140時間未満 (18点)</option>
                <option value="100">100時間以上120時間未満 (17点)</option>
                <option value="80">80時間以上100時間未満 (16点)</option>
                <option value="64">64時間以上80時間未満 (15点)</option>
              </select>
            </label>
          </div>
        )}
      </div>

      <div>
        <label>
          <input
            type="radio"
            name={`${title}-type`}
            checked={status.employment.type === 'single_parent'}
            onChange={() => handleTypeChange('single_parent')}
          />
          ひとり親世帯その他これに準ずる世帯であり、保育を必要とする要件がある
        </label>
      </div>

      <div>
        <label>
          <input
            type="radio"
            name={`${title}-type`}
            checked={status.employment.type === 'other'}
            onChange={() => handleTypeChange('other')}
          />
          その他 (8点)
        </label>
      </div>

      <div>
        <label>
          <input
            type="radio"
            name={`${title}-type`}
            checked={status.employment.type === 'none'}
            onChange={() => handleTypeChange('none')}
          />
          該当なし (0点)
        </label>
      </div>
    </fieldset>
  );
};

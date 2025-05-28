import React from 'react';
import type { CalculationResult } from '../types';

interface Props {
  result: CalculationResult;
}

export const ResultDisplay: React.FC<Props> = ({ result }) => {
  return (
    <div className="result-container">
      <h3>計算結果</h3>
      
      <table className="result-table">
        <tbody>
          <tr>
            <td>父の基本点数</td>
            <td>{result.fatherPoints}点</td>
          </tr>
          <tr>
            <td>母の基本点数</td>
            <td>{result.motherPoints}点</td>
          </tr>
          <tr>
            <td>基本点数合計（上限40点適用後）</td>
            <td>{result.basicPointsTotal}点</td>
          </tr>
          <tr>
            <td>調整点数合計</td>
            <td>{result.adjustmentPoints > 0 ? '+' : ''}{result.adjustmentPoints}点</td>
          </tr>
          <tr className="total-row">
            <td>総合計点数（利用調整点数）</td>
            <td>{result.totalPoints}点</td>
          </tr>
        </tbody>
      </table>

      <div className="disclaimer">
        <h4>免責事項</h4>
        <ul>
          <li>この計算結果は、鎌倉市利用調整基準表（令和7年度4月入所から適用）に基づくシミュレーションです。</li>
          <li>実際の入所選考は、提出された書類等に基づき鎌倉市が行います。</li>
          <li>計算結果が入園を保証するものではありません。</li>
          <li>最新情報や詳細条件、個別状況については、鎌倉市担当窓口にご確認ください。</li>
        </ul>
      </div>
    </div>
  );
};

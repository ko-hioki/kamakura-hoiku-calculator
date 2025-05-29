# 鎌倉市保育園入園調整点数計算ツール

鎌倉市の保育所等利用調整基準表に基づいて、入園調整点数を自動計算するWebアプリケーションです。

![鎌倉市保育園入園調整点数計算ツール](https://img.shields.io/badge/React-18.2-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue) ![Vite](https://img.shields.io/badge/Vite-6.3-green)

## 🎯 概要

このツールは、令和7年度4月入所から適用される鎌倉市の利用調整基準表に基づいて、保育園入園の調整点数を計算します。保護者の就労状況、世帯の状況などを入力すると、自動的に合計点数が算出されます。

### 主な機能

- **保護者別点数計算**: 父・母それぞれの就労状況に基づく基本点数の算出
- **調整点数計算**: ひとり親世帯、多子世帯などの調整要因による加減点
- **リアルタイム計算**: 入力と同時に点数が更新される

## 🚀 デモ

[ライブデモを見る]([https://your-demo-url.com](https://ko-hioki.github.io/kamakura-hoiku-calculator/)) 

## 📋 対応する基準

- 令和7年度4月入所から適用の鎌倉市利用調整基準表
- 基本点数: 就労、求職、妊娠・出産、疾病・負傷・障害、介護・看護、災害復旧、就学
- 調整点数: 19項目の加減点要因

## 🛠️ 技術スタック

- **Frontend**: React 18.2 + TypeScript 5.5
- **Build Tool**: Vite 6.3
- **Styling**: CSS Modules
- **Development**: ESLint + Prettier

## 📦 インストール

### 前提条件

- Node.js 18.0 以上
- npm または yarn

### セットアップ

```bash
# リポジトリをクローン
git clone https://github.com/ko-hioki/kamakura-hoiku-calculator.git
cd kamakura-hoiku-calculator

# 依存関係をインストール
yarn install
# または
npm install

# 開発サーバーを起動
yarn dev
# または
npm run dev
```

## 🎮 使用方法

### 1. 父の状況を入力
- 就労状況（月の勤務時間）
- 求職活動
- 疾病・負傷・障害
- 介護・看護
- 災害復旧活動
- 就学

### 2. 母の状況を入力
- 上記項目に加えて
- 妊娠・出産（母のみ）

### 3. 世帯の状況を選択
- ひとり親世帯
- 兄弟姉妹が既に在園
- 兄弟姉妹の同時申込
- 多子世帯（18歳未満の子が3人以上）
- その他調整要因（19項目）

### 4. 結果の確認
- 基本点数、調整点数、合計点数が自動計算される
- 各項目の詳細な内訳を確認できる

### 5. リセット機能
- 「すべてリセット」ボタンで入力内容を一括クリア

## 📁 プロジェクト構造

```
kamakura-hoiku-calculator/
├── src/
│   ├── components/          # Reactコンポーネント
│   │   ├── ParentForm.tsx   # 保護者状況入力フォーム
│   │   ├── HouseholdForm.tsx # 世帯状況入力フォーム
│   │   └── ResultDisplay.tsx # 計算結果表示
│   ├── utils/
│   │   └── calculator.ts    # 点数計算ロジック
│   ├── types.ts            # TypeScript型定義
│   ├── App.tsx             # メインアプリケーション
│   ├── App.css             # スタイルシート
│   └── main.tsx            # エントリーポイント
├── public/                 # 静的ファイル
├── specification/          # 仕様書ディレクトリ
├── package.json           # 依存関係とスクリプト
└── README.md              # このファイル
```

## 🧮 計算ロジック

### 基本点数（最大40点）
- **就労**: 月64時間以上の勤務で15-20点
- **求職活動**: 12点
- **妊娠・出産**: 20点（母のみ）
- **疾病・負傷・障害**: 16-20点
- **介護・看護**: 16-20点
- **災害復旧**: 20点
- **就学**: 16-20点

### 調整点数（加減点）
- **ひとり親世帯**: +15点
- **兄弟姉妹が既に在園**: +10点
- **多子世帯**: +5点
- **生活保護受給世帯**: +10点
- その他15項目の調整要因

### 特別ルール
- ひとり親世帯の求職活動: 基本点数30点（特例）

## 🤝 コントリビューション

1. このリポジトリをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/new-feature`)
3. 変更をコミット (`git commit -am 'Add new feature'`)
4. ブランチにプッシュ (`git push origin feature/new-feature`)
5. プルリクエストを作成

## 📄 ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。詳細は [LICENSE](LICENSE) ファイルを参照してください。

## ⚠️ 免責事項

- このツールは参考用です。
- 計算結果の正確性については保証いたしません
- 最新の基準については鎌倉市公式サイトをご確認ください

## 📞 サポート

- 問題やバグを見つけた場合は、[Issues](https://github.com/your-username/kamakura-hoiku-calculator/issues) でお知らせください

## 🔗 関連リンク

- [令和7年度保育所等入所申込みのご案内（鎌倉市）](https://www.city.kamakura.kanagawa.jp/hoiku/r7nyushomoushikomi.html)
- [令和7年度利用調整基準表](https://www.city.kamakura.kanagawa.jp/hoiku/documents/r7_riyouchousei.pdf)

---

**開発者**: Hioki Koji
**AI生成**
- コード生成: Claude Sonnet 4
- 仕様: Gemini
**最終更新**: 2025年5月28日  
**バージョン**: 1.0.0
    ...reactDom.configs.recommended.rules,
  },
})
```

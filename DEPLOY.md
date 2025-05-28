# 鎌倉市保育園入園調整点数計算ツール デプロイガイド

## GitHub リポジトリの作成

### 1. GitHubでリポジトリを作成
1. [GitHub](https://github.com) にログイン
2. 「New repository」をクリック
3. Repository name: `kamakura-hoiku-calculator`
4. Description: `鎌倉市保育園入園調整点数計算ツール`
5. 「Public」を選択
6. 「Create repository」をクリック

### 2. ローカルでGitを初期化

```bash
# プロジェクトディレクトリに移動
cd /Users/hioki-koji/Documents/workspace/kamakura-hoiku-calculator

# Gitを初期化
git init

# すべてのファイルを追加
git add .

# 初回コミット
git commit -m "Initial commit: 鎌倉市保育園入園調整点数計算ツール"

# リモートリポジトリを追加（あなたのGitHubユーザー名に変更してください）
git remote add origin https://github.com/your-username/kamakura-hoiku-calculator.git

# メインブランチにプッシュ
git branch -M main
git push -u origin main
```

## Vercel でのデプロイ

### 1. Vercelアカウント作成
1. [Vercel](https://vercel.com) にアクセス
2. GitHubアカウントでサインアップ

### 2. プロジェクトをデプロイ
1. Vercel ダッシュボードで「New Project」をクリック
2. GitHubリポジトリを選択
3. プロジェクト設定:
   - Framework Preset: `Vite`
   - Root Directory: `./` (デフォルト)
   - Build Command: `yarn build`
   - Output Directory: `dist`
4. 「Deploy」をクリック

### 3. カスタムドメイン（オプション）
- Vercelの設定でカスタムドメインを追加可能

## Netlify でのデプロイ（代替案）

### 1. Netlifyアカウント作成
1. [Netlify](https://netlify.com) にアクセス
2. GitHubアカウントでサインアップ

### 2. サイトをデプロイ
1. 「New site from Git」をクリック
2. GitHubを選択してリポジトリを接続
3. ビルド設定:
   - Build command: `yarn build`
   - Publish directory: `dist`
4. 「Deploy site」をクリック

## GitHub Pages でのデプロイ

### 1. GitHub Actions の設定

```yaml
# .github/workflows/deploy.yml を作成
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: yarn install
      
    - name: Build
      run: yarn build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

### 2. vite.config.ts の更新

```typescript
// GitHub Pages用のbase pathを設定
export default defineConfig({
  plugins: [react()],
  base: '/kamakura-hoiku-calculator/'
})
```

## 更新手順

```bash
# 変更をコミット
git add .
git commit -m "Update: 機能追加・修正内容"

# プッシュ（自動デプロイされます）
git push origin main
```

## 注意事項

- READMEの「your-username」を実際のGitHubユーザー名に変更してください
- package.jsonの作者情報とリポジトリURLを更新してください
- デプロイ後はREADMEのデモURLを実際のURLに更新してください

# 開発者紹介サイト（React + Tailwind CSS）

React と Tailwind CSS で作成した、開発者紹介・技術開示ページです。

## 構成

- `index.html`: エントリーポイント
- `app.js`: React コンポーネントとページ内容
- `.github/workflows/deploy-pages.yml`: GitHub Pages 自動デプロイ

## ローカル確認

```bash
python3 -m http.server 4173
```

ブラウザで `http://localhost:4173` を開いて確認できます。

## GitHub Pages 公開手順

1. このリポジトリを GitHub に push
2. GitHub の **Settings > Pages** で Build and deployment を **GitHub Actions** に設定
3. `main` ブランチへ push すると、`Deploy static site to GitHub Pages` ワークフローで自動公開


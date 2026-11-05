# pork2026

| サイト | ディレクトリ | lang | 開発ポート |
| --- | --- | --- | --- |
| シンガポール | `jpork2026_SG` | en | 5173 |
| 香港 | `jpork2026_HK` | zh-HK | 5174 |
| タイ | `jpork2026_TH` | th | 5175 |

各サイトは独立した Vite + Sass プロジェクトです。

```bash
cd jpork2026_SG
npm install
npm run dev      # 開発サーバー
npm run build    # dist/ に出力
npm run preview  # ビルド結果の確認
```

## ディレクトリ構成

```
jpork2026_XX/
├── index.html
├── vite.config.js
├── public/images/          # そのままコピーされる静的ファイル
└── src/
    ├── js/main.js          # エントリー（SCSSもここでimport）
    └── scss/
        ├── style.scss      # 各パーシャルを@useでまとめる
        ├── foundation/     # 変数・mixin・リセット・ベース
        ├── layout/         # l-*（header, footer, container, section）
        └── components/     # c-* / p-*（heading, button, hero）
```

パーシャルで変数・mixinを使う場合は先頭で読み込みます。

```scss
@use "../foundation/variables" as *;
@use "../foundation/mixins" as *;
```

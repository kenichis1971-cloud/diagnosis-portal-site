# テーマページ用ヒーロー画像 準備メモ

各テーマページへ将来ヒーロー画像を追加するときの、画像ファイル名・設置場所・CSSクラス・追加手順の整理です。

> 今回は画像ファイル追加や `background-image` の設定は行っていません。実装済みのトップページ画像・オーバーレイ設定も変更しません。

## 設置場所と推奨サイズ

- 画像設置場所: `public/images/heroes/`
- PC用推奨サイズ: `1792 × 768px`
- スマホ用推奨サイズ: `900 × 1200px`
- 今後追加するテーマページ画像の拡張子: できれば `.jpg` で統一

トップページ画像はすでに以下の `.jpeg` ファイル名で運用中です。トップページのみ拡張子が `.jpeg` である点に注意してください。

- `public/images/heroes/top-hero-pc.jpeg`
- `public/images/heroes/top-hero-sp.jpeg`

## 推奨ファイル名とCSSクラス対応表

各対象ページは、共通の `hero-image-slot` にページ別クラスを組み合わせています。将来画像を設定する場合は、下表のページ別クラスに対してPC用画像を指定し、スマホ用画像はメディアクエリ内で同じページ別クラスへ上書き指定します。

| ページ | PC用ファイル名 | スマホ用ファイル名 | 共通クラス | 画像指定先のページ別クラス | 現在のコンポーネント構造 |
| --- | --- | --- | --- | --- | --- |
| `/diagnoses` | `diagnoses-hero-pc.jpg` | `diagnoses-hero-sp.jpg` | `hero-image-slot` | `diagnoses-hero` | `PageHero` → `page-hero hero-image-slot diagnoses-hero` |
| `/love` | `love-hero-pc.jpg` | `love-hero-sp.jpg` | `hero-image-slot` | `love-hero` | `DiagnosisIntro` → `detail-card hero-image-slot love-hero` |
| `/marriage` | `marriage-hero-pc.jpg` | `marriage-hero-sp.jpg` | `hero-image-slot` | `marriage-hero` | `DiagnosisIntro` → `detail-card hero-image-slot marriage-hero` |
| `/meeting-style` | `meeting-style-hero-pc.jpg` | `meeting-style-hero-sp.jpg` | `hero-image-slot` | `meeting-style-hero` | `DiagnosisIntro` → `detail-card hero-image-slot meeting-style-hero` |
| `/reunion` | `reunion-hero-pc.jpg` | `reunion-hero-sp.jpg` | `hero-image-slot` | `reunion-hero` | `DiagnosisIntro` → `detail-card hero-image-slot reunion-hero` |
| `/beauty` | `beauty-hero-pc.jpg` | `beauty-hero-sp.jpg` | `hero-image-slot` | `beauty-hero` | `DiagnosisIntro` → `detail-card hero-image-slot beauty-hero` |
| `/sexual-worries` | `sexual-worries-hero-pc.jpg` | `sexual-worries-hero-sp.jpg` | `hero-image-slot` | `sexual-worries-hero` | `DiagnosisIntro` → `detail-card hero-image-slot sexual-worries-hero` |

## 既存CSSとの対応

`app/globals.css` では、トップページと各テーマページ用のページ別クラスが同じグループにまとめられ、以下の背景画像共通スタイルだけが設定されています。

- `background-position: center;`
- `background-repeat: no-repeat;`
- `background-size: cover;`

トップページの `.top-hero` には、すでに `top-hero-pc.jpeg` と `top-hero-sp.jpeg` の `background-image` が設定されています。一方、対象テーマページのページ別クラスにはまだ `background-image` を設定していないため、将来画像を追加するときはこの既存のクラス設計に合わせます。

## 将来の追加手順

1. PC用・スマホ用画像を推奨サイズで作成し、`public/images/heroes/` に配置する。
2. ファイル名は上記一覧の `.jpg` 名にそろえる。
3. `app/globals.css` で、対象ページのページ別クラスにPC用 `background-image` を追加する。
4. スマホ表示用のメディアクエリ内で、同じページ別クラスにスマホ用 `background-image` を上書き指定する。
5. トップページの `.top-hero`、既存オーバーレイ、グローバルナビ、フッター、note導線、広告コードは変更しない。
6. 表示確認時は、PC幅とスマホ幅の両方で文字の可読性とオーバーレイの見え方を確認する。

### 将来CSSに追加する場合のイメージ

以下は将来作業時の考え方を示すための例です。現時点ではCSSへ追加していません。

```css
.diagnoses-hero {
  background-image: url("/images/heroes/diagnoses-hero-pc.jpg");
}

@media (max-width: 640px) {
  .diagnoses-hero {
    background-image: url("/images/heroes/diagnoses-hero-sp.jpg");
  }
}
```

他のテーマページも、対応表のページ別クラスとファイル名に置き換えて同じ方針で追加します。

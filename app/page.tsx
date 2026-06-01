import Link from "next/link";
import { DiagnosisGrid } from "@/components/DiagnosisGrid";
import { comingSoonDiagnoses, diagnoses, publishedDiagnoses } from "@/data/diagnoses";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__content">
          <p className="eyebrow">総合診断ポータル</p>
          <h1>自分に合う診断を、やさしく選べる場所</h1>
          <p>
            恋愛・婚活・出会い方など、気持ちや行動を整理するための診断をまとめました。
          </p>
          <div className="hero__actions">
            <Link className="button" href="/diagnoses">
              診断一覧を見る
            </Link>
            <span className="hero__note">公開済み3件・準備中3件を掲載しています。</span>
          </div>
        </div>
        <div className="hero__panel" aria-label="掲載診断の状態">
          <div>
            <strong>{publishedDiagnoses.length}</strong>
            <span>公開済み</span>
          </div>
          <div>
            <strong>{comingSoonDiagnoses.length}</strong>
            <span>準備中</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__header">
          <p className="eyebrow">Diagnoses</p>
          <h2>掲載中・準備中の診断</h2>
          <p>診断本体は各専門サイトで提供し、このサイトでは入口として概要を案内します。</p>
        </div>
        <DiagnosisGrid items={diagnoses} featured />
      </section>
    </>
  );
}

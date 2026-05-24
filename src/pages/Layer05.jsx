import React from 'react';
import './Layer00.css';
import './Layer05.css';

export function Layer05() {
  return (
    <main className="layer-page">
      <div className="layer-header-banner layer05-theme">
        <div className="container">
          <div className="layer-badge">LAYER 05</div>
          <h1 className="serif">身体観を広げる</h1>
          <p className="layer-subtitle">文化・進化・感覚を通して、身体の見方を広げる。</p>
        </div>
      </div>

      <section className="container section">
        <div className="layer-intro-grid">
          <div className="layer-intro-text">
            <p>身体の不調や痛みは、筋肉や関節だけの問題ではなく、<br />
            「自分の身体をどう捉えているか（身体観）」に影響を受けます。<br />
            カラダビの最終層では、進化や文化、環境といった広い視点から<br />
            身体を見つめ直し、自分らしい健やかさを見つけます。</p>
            <div className="mt-4">
              <a href="#views" className="btn btn-primary w-100 mb-2">5層で扱う視点を見る ＞</a>
              <a href="/" className="btn btn-outline w-100">トップページへ戻る ＞</a>
            </div>
          </div>
          <div className="layer-intro-image">
            <img src="/layer05.png" alt="身体観を広げる" className="main-layer-img" />
          </div>
          <div className="layer-intro-alert">
            <h4 className="mb-2">5層で扱う、身体の捉え方</h4>
            <div className="sense-list">
              <div className="sense-item"><span>01</span> 発生と進化</div>
              <div className="sense-item"><span>02</span> 文化と歴史</div>
              <div className="sense-item"><span>03</span> 個人の文脈</div>
              <div className="sense-item"><span>04</span> 社会環境</div>
            </div>
          </div>
        </div>
      </section>

      <section className="gray-bg section" id="views">
        <div className="container">
          <h3 className="section-title text-center">代表的なワークや視点</h3>
          <p className="text-center mb-4">ただ身体を動かすのではなく、「どう動くのか」「なぜそのように動くのか」を感じるワークを行います。</p>
          
          <div className="views-grid">
            <div className="view-card">
              <div className="view-num">01</div>
              <h4>重力と抗重力</h4>
              <p>地球の重力に対して、どう身体を立ち上げているかを感じます。重力に逆らうのではなく、乗る感覚を養います。</p>
            </div>
            <div className="view-card">
              <div className="view-num">02</div>
              <h4>呼吸とリズム</h4>
              <p>生命の基本である呼吸のリズムを感じ、自分の身体の内側の波に意識を向けます。</p>
            </div>
            <div className="view-card">
              <div className="view-num">03</div>
              <h4>進化の過程</h4>
              <p>魚類、両生類、爬虫類、哺乳類と進化してきた身体の歴史を、背骨の動きを通して追体験します。</p>
            </div>
            <div className="view-card">
              <div className="view-num">04</div>
              <h4>内観と瞑想</h4>
              <p>静かに座り、自分の身体の中で起こっている微細な変化や感覚にただ気づく練習をします。</p>
            </div>
            <div className="view-card">
              <div className="view-num">05</div>
              <h4>空間とのつながり</h4>
              <p>自分という境界線を超えて、周囲の空間や他者、環境とどのように関わっているかを感じます。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="flex-card layer05-card">
          <div className="content">
            <h3 className="serif mb-2">なぜ身体観を広げるのか？</h3>
            <p>現代人は、「身体＝思い通りに動かす道具」「痛い＝悪いこと」という見方に縛られがちです。<br/>
            しかし、痛みは身体からのメッセージであり、身体は自然の一部です。<br/>
            「こうでなければならない」という枠を外し、身体の多様性や奥深さに気づくことで、<br/>
            結果として慢性的な痛みや緊張が手放せることも多くあります。<br/>
            LAYER 05は、特定の正解を探すのではなく、あなた自身の身体との新しい付き合い方を<br/>
            見つけるためのレイヤーです。</p>
          </div>
        </div>
      </section>

      <section className="container section messages-section">
        <div className="message-box patient">
          <h4><span className="icon">♡</span> 患者さん・クライアントの方へ</h4>
          <p>
            ここまでご自身の身体と向き合ってきて、「思ったより自分の身体はよくできている」「痛いからといって全てが悪いわけではない」と感じたかもしれません。<br/>
            その気づきこそが、身体観が広がった証拠です。<br/>
            身体をコントロールしようとするのではなく、身体の声を聴き、共に生きていく。<br/>
            そんな心地よい状態を、これからも大切に育てていきましょう。
          </p>
        </div>
        <div className="message-box expert">
          <h4><span className="icon">👨‍⚕️</span> 専門家へ</h4>
          <p>
            LAYER 05は、身体の機械論的パラダイムを超えて、生態学的・現象学的なパラダイムへ視座を広げる層です。<br/>
            痛みや症状を「修復すべきエラー」としてではなく、その人の生きる文脈や環境との相互作用の中で生じる「意味のある表現」として捉え直します。<br/>
            プラセボ効果、ノセボ効果、ナラティヴ・メディスン、身体化された認知（Embodied Cognition）などの概念を活用し、クライアント自身の自己治癒力とレジリエンスを支援します。
          </p>
        </div>
      </section>
    </main>
  );
}

import React from 'react';
import './Layer00.css';

export function Layer00() {
  return (
    <main className="layer-page">
      <div className="layer-header-banner layer00-theme">
        <div className="container">
          <div className="layer-badge">LAYER 00</div>
          <h1 className="serif">注意サインの確認</h1>
          <p className="layer-subtitle">医療機関への相談が必要な場合を確認する</p>
        </div>
      </div>

      <section className="container section">
        <div className="layer-intro-grid">
          <div className="layer-intro-text">
            <p>カラダビの0層は、身体づくりの入口です。<br />
            強い痛み、進行するしびれ、発熱、外傷、<br />
            感染や病気の可能性がないかを確認し、<br />
            必要な場合は医療機関への相談を優先します。</p>
            <div className="mt-4">
              <a href="#check" className="btn btn-primary w-100 mb-2">まずは安全確認をする ＞</a>
              <a href="/layer05" className="btn btn-outline w-100">カラダビの5層を見る ＞</a>
            </div>
          </div>
          <div className="layer-intro-image">
            <img src="/layer00.png" alt="安全確認" className="main-layer-img" />
          </div>
          <div className="layer-intro-alert">
            <div className="alert-card">
              <div className="alert-item"><span className="icon">!</span> 強い痛み・いつもと違う痛み</div>
              <div className="alert-item"><span className="icon">⚡</span> 進行するしびれ・力が入りにくい</div>
              <div className="alert-item"><span className="icon">🌡️</span> 発熱・腫れ・炎症のサイン</div>
              <div className="alert-item"><span className="icon">🦴</span> 外傷・転倒・骨折の疑い</div>
              <div className="alert-item"><span className="icon">🦠</span> 感染・病気の可能性</div>
            </div>
            <div className="medical-box">
              <span className="icon">🏥</span>
              <h4>医療機関へ<br/>ご相談ください</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="gray-bg section text-center">
        <div className="container">
          <h2 className="serif mb-4">安全に進められる状態か、まず確認しましょう。</h2>
        </div>
      </section>

      <section className="container section" id="check">
        <h3 className="section-title text-center">0層で確認する5つのサイン</h3>
        <div className="signs-grid">
          <div className="sign-card">
            <div className="sign-num">01</div>
            <h4>強い痛み・<br/>いつもと違う痛み</h4>
            <ul>
              <li>安静にしていても痛い</li>
              <li>時間とともに悪化している</li>
              <li>夜間も強く痛む</li>
              <li>今までにない痛み</li>
              <li>急に強い痛みが出た</li>
            </ul>
          </div>
          <div className="sign-card">
            <div className="sign-num">02</div>
            <h4>進行するしびれ・<br/>力が入りにくい</h4>
            <ul>
              <li>しびれが広がっている</li>
              <li>力が入りにくい</li>
              <li>つまずきやすい</li>
              <li>感覚が鈍い</li>
              <li>排尿・排便の異常を伴う</li>
            </ul>
          </div>
          <div className="sign-card">
            <div className="sign-num">03</div>
            <h4>発熱・腫れ・<br/>炎症のサイン</h4>
            <ul>
              <li>発熱がある</li>
              <li>患部が赤い</li>
              <li>腫れている</li>
              <li>熱感がある</li>
              <li>触ると強く痛む</li>
              <li>体調不良を伴う</li>
            </ul>
          </div>
          <div className="sign-card">
            <div className="sign-num">04</div>
            <h4>外傷・転倒・<br/>骨折の疑い</h4>
            <ul>
              <li>転倒後から痛みが強い</li>
              <li>ぶつけた後に腫れや内出血がある</li>
              <li>体重をかけられない</li>
              <li>動かすと鋭く痛む</li>
              <li>骨粗鬆症の可能性がある</li>
              <li>事故やスポーツ外傷の後</li>
            </ul>
          </div>
          <div className="sign-card">
            <div className="sign-num">05</div>
            <h4>感染・病気の<br/>可能性</h4>
            <ul>
              <li>原因不明の体重減少</li>
              <li>がんの既往がある</li>
              <li>発熱や強い倦怠感</li>
              <li>免疫力が低下している</li>
              <li>安静でも改善しない痛み</li>
              <li>徐々に悪化している痛み</li>
            </ul>
          </div>
        </div>
        <p className="text-center mt-4" style={{fontSize: '0.8rem', color: 'var(--color-text-light)'}}>
          ※上記のサインは一例です。気になる症状がある場合は、自己判断せずに医療機関へご相談ください。
        </p>
      </section>

      <section className="container section">
        <h3 className="section-title text-center">0層の流れ</h3>
        <div className="flow-steps">
          <div className="flow-step">
            <div className="step-header">STEP 01</div>
            <h4>症状を聞く</h4>
            <p>痛みの場所、強さ、いつから始まったか、悪化しているかを確認します。</p>
          </div>
          <div className="flow-arrow">▶</div>
          <div className="flow-step">
            <div className="step-header">STEP 02</div>
            <h4>生活への影響を見る</h4>
            <p>歩く、立つ、座る、寝返る、階段、仕事、睡眠などにどの程度影響しているかを確認します。</p>
          </div>
          <div className="flow-arrow">▶</div>
          <div className="flow-step">
            <div className="step-header">STEP 03</div>
            <h4>危険サインを確認する</h4>
            <p>しびれ、脱力、発熱、腫れ、外傷歴、排尿・排便の異常、既往歴などを確認します。</p>
          </div>
          <div className="flow-arrow">▶</div>
          <div className="flow-step">
            <div className="step-header">STEP 04</div>
            <h4>進め方を判断する</h4>
            <p>安全に進められる場合は、次の1層へ進みます。医療的な確認が必要な場合は、医療機関への相談をおすすめします。</p>
          </div>
        </div>
      </section>
      
      <section className="container section messages-section">
        <div className="message-box patient">
          <h4><span className="icon">♡</span> 患者さんへ</h4>
          <p>
            痛みがあると、すぐに「揉んだ方がいいのかな」「伸ばした方がいいのかな」「運動した方がいいのかな」と考えてしまいます。<br/>
            でも、最初に必要なのは、"その痛みが、動かしてよい痛みかどうか"を確認することです。<br/>
            カラダビでは、身体を良くするために、まず安全を確認します。<br/>
            必要な場合は無理に進めず、医療機関への相談をおすすめします。<br/>
            安心して進められる状態が確認できたら、次に「邪魔を外す」ステップへ進みます。
          </p>
        </div>
        <div className="message-box expert">
          <h4><span className="icon">👨‍⚕️</span> 専門家へ</h4>
          <p>
            LAYER 00は、介入前スクリーニングの位置づけです。<br/>
            ここでは診断を目的とせず、運動療法・徒手介入・セルフケアへ進む前に、医療機関での評価が優先される可能性のある状態を確認します。
          </p>
          <ul className="expert-list">
            <li>安静時痛、夜間痛、増悪傾向</li>
            <li>進行性の神経症状（しびれ、脱力、感覚鈍麻など）</li>
            <li>発熱、腫脹、熱感など炎症・感染の兆候</li>
            <li>外傷歴、骨折リスク、医療既往歴・内科的疾患の背景</li>
          </ul>
        </div>
      </section>

    </main>
  );
}

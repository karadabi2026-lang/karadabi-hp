import React from 'react';
import './Layer00.css'; // Reuse common layer styles
import './Layer01.css';

export function Layer01() {
  return (
    <main className="layer-page">
      <div className="layer-header-banner layer01-theme">
        <div className="container">
          <div className="layer-badge">LAYER 01</div>
          <h1 className="serif">邪魔を外す</h1>
          <p className="layer-subtitle">末梢組織の状態を整える</p>
        </div>
      </div>

      <section className="container section">
        <div className="layer-intro-grid">
          <div className="layer-intro-text">
            <p>安全確認を終えたあと、カラダビではまず、身体の<br />
            動きを妨げている末梢組織の抵抗を確認します。<br />
            筋・筋膜、関節包、皮膚・皮下組織、靭帯・支持組織周辺の<br />
            滑走性を整え、身体が動きやすくなる入口をつくります。</p>
            <div className="mt-4">
              <a href="#check" className="btn btn-primary w-100 mb-2">身体の動きにくさを確認する ＞</a>
              <a href="/layer05" className="btn btn-outline w-100">5層アプローチを見る ＞</a>
            </div>
          </div>
          <div className="layer-intro-image">
            <img src="/layer01.png" alt="邪魔を外す" className="main-layer-img" />
          </div>
          <div className="layer-intro-alert">
            <h4 className="mb-2">動きを妨げる主な要因</h4>
            <ul className="obstacle-list">
              <li>筋・筋膜の強張ばり</li>
              <li>関節包の硬さ</li>
              <li>末梢神経の滑走不全</li>
              <li>皮膚・皮下組織の制限</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="gray-bg section text-center">
        <div className="container">
          <h2 className="serif mb-4">動きを妨げる末梢組織の負担を確認し、滑りを回復させます。</h2>
        </div>
      </section>

      <section className="container section" id="check">
        <h3 className="section-title text-center">1層で見る5つの邪魔</h3>
        <div className="signs-grid">
          <div className="sign-card">
            <div className="sign-num">01</div>
            <h4>筋・筋膜のこわばり</h4>
            <p>筋肉や筋膜の滑走性が低下すると、動き始めに重さや引っかかりを感じやすくなります。</p>
          </div>
          <div className="sign-card">
            <div className="sign-num">02</div>
            <h4>関節包の硬さ</h4>
            <p>関節を包む組織が硬くなると、動かせる範囲や方向が制限されることがあります。</p>
          </div>
          <div className="sign-card">
            <div className="sign-num">03</div>
            <h4>靭帯・支持組織の緊張</h4>
            <p>関節を支える組織の緊張が高いと、身体は守るように固まりやすくなります。</p>
          </div>
          <div className="sign-card">
            <div className="sign-num">04</div>
            <h4>末梢神経の滑走不全</h4>
            <p>神経の通り道に動きにくさがあると、しびれ感、張り感、動作時の違和感につながることがあります。</p>
          </div>
          <div className="sign-card">
            <div className="sign-num">05</div>
            <h4>皮膚・皮下組織の制限</h4>
            <p>皮膚や皮下組織の動きが硬いと、身体の表面から動きの自由度が下がることがあります。</p>
          </div>
        </div>
      </section>

      <section className="container section">
        <h3 className="section-title text-center">1層の流れ</h3>
        <div className="flow-steps">
          <div className="flow-step">
            <div className="step-header">STEP 01</div>
            <h4>動きにくさを確認する</h4>
            <p>どの動作で重い、引っかかる、つっぱる、怖いと感じるかを確認します。</p>
          </div>
          <div className="flow-arrow">▶</div>
          <div className="flow-step">
            <div className="step-header">STEP 02</div>
            <h4>組織の抵抗を探す</h4>
            <p>筋膜、関節包、皮膚、神経周囲など、動きを妨げている可能性のある部位を確認します。</p>
          </div>
          <div className="flow-arrow">▶</div>
          <div className="flow-step">
            <div className="step-header">STEP 03</div>
            <h4>滑走性を整える</h4>
            <p>無理な刺激ではなく、組織が動きやすくなる方向へ丁寧に介入します。</p>
          </div>
          <div className="flow-arrow">▶</div>
          <div className="flow-step">
            <div className="step-header">STEP 04</div>
            <h4>動きを再確認する</h4>
            <p>介入前後で、動きやすさ、軽さ、可動範囲、違和感の変化を確認します。</p>
          </div>
        </div>
      </section>
      
      <section className="container section text-center">
        <h3 className="section-title">こんな症状の方に関係します</h3>
        <div className="symptoms-grid">
          <div className="symptom-item">動き始めが重い</div>
          <div className="symptom-item">関節がつまる感じがある</div>
          <div className="symptom-item">伸ばすとつっぱる</div>
          <div className="symptom-item">左右で動きやすさが違う</div>
          <div className="symptom-item">しびれ感や張り感がある</div>
          <div className="symptom-item">マッサージしても戻りやすい</div>
        </div>
      </section>

      <section className="container section messages-section">
        <div className="message-box patient">
          <h4><span className="icon">♡</span> 患者さんへ</h4>
          <p>
            身体が動きにくいとき、原因は筋力不足だけとは限りません。<br/>
            筋肉、筋膜、関節を包む組織、皮膚、神経の通り道などが動きを邪魔していることがあります。<br/>
            カラダビでは、まずその邪魔を確認し、身体が動きやすくなる準備を整えます。<br/>
            強く揉むのではなく、身体が安心して動き出せる状態をつくることを大切にします。
          </p>
        </div>
        <div className="message-box expert">
          <h4><span className="icon">👨‍⚕️</span> 専門家へ</h4>
          <p>
            LAYER 01は、末梢組織の機械的抵抗と感覚入力の質を評価する層です。<br/>
            筋・筋膜、関節包、靭帯、皮膚・皮下組織、末梢神経周囲の滑走性や張力を確認し、運動療法・運動学習へ進みやすい状態を整えます。
          </p>
        </div>
      </section>
    </main>
  );
}

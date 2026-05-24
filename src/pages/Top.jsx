import React from 'react';
import './Top.css';

export function Top() {
  return (
    <main className="top-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-catchphrase serif">
              もうその場しのぎに<br />
              通い続けなくて良い
            </h1>
            <p className="hero-description">
              ケアサロン カラダビで、12週間・3ヶ月かけて、<br />
              自分の身体の苦手と整え方を見つける。
            </p>
            <p className="hero-sub-description">
              ケアサロン カラダビは、姿勢・動作・呼吸・セルフケアを通して、<br />
              身体の状態を丁寧に確認し、あなたに合う整え方を一緒に見つけていく場所です。<br />
              手技によるケアと動きの学びを組み合わせ、ただ受け続けるのではなく、<br />
              自分の身体を理解し、整え、続けられる力を育てます。<br />
              あなたらしい心地よい毎日を、3ヶ月後の自分とともに目指しましょう。
            </p>
            <div className="hero-actions">
              <a href="#" className="btn-line">LINEで相談する</a>
              <a href="#courses" className="btn btn-outline">今受けられる内容を見る</a>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img src="/hero.png" alt="Hero" className="hero-image" />
            <div className="hero-badge">
              <div className="badge-icon"></div>
              <h3 className="serif">身体美</h3>
              <p>整える、巡る、<br />あなた本来の美しさへ</p>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Box */}
      <section className="warning-section container">
        <div className="warning-box">
          <div className="warning-icon">!</div>
          <p>強い痛み、しびれ、発熱、急な症状変化、転倒後の痛みなどがある場合は、<br />まず医療機関での確認をおすすめします。</p>
          <a href="/layer00" className="warning-link">医療安全について詳しく見る →</a>
        </div>
      </section>
      
      {/* Concept Section */}
      <section className="concept-section container section">
        <div className="concept-grid">
          <div className="concept-left">
            <h2 className="serif concept-title">ケアサロン カラダビとは</h2>
            <p className="concept-text">
              ケアサロン カラダビは、手によるケアと動きの学びを組み合わせたサロンです。<br />
              今の身体の状態を一緒に確認し、原因になりやすいクセや負担のパターンを<br />
              明らかにします。そして、日常で無理なく続けられる整え方を身につけ、<br />
              あなた自身が身体を整える力を育てていきます。
            </p>
            <div className="concept-features">
              <div className="feature-item">
                <div className="feature-icon">🔍</div>
                <h4>状態を確認する</h4>
                <p>姿勢・動き・呼吸を丁寧にチェック</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🤲</div>
                <h4>手で整える</h4>
                <p>筋膜・関節・神経にアプローチ</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🚶</div>
                <h4>動きを学ぶ</h4>
                <p>日常で活かせる動きの練習</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🌱</div>
                <h4>整え方を続ける</h4>
                <p>自分で整えられる習慣をつくる</p>
              </div>
            </div>
          </div>
          <div className="concept-right">
            <h2 className="serif concept-title">こんな場ではありません</h2>
            <ul className="not-this-list">
              <li>
                <span className="cross">×</span>
                <span>医療機関ではありません（診断・投薬・治療は行いません）</span>
              </li>
              <li>
                <span className="cross">×</span>
                <span>その場の症状だけを一時的に楽にする場所ではありません</span>
              </li>
              <li>
                <span className="cross">×</span>
                <span>短期的に変化を追うだけの場所ではありません</span>
              </li>
            </ul>
            <p className="not-this-conclusion">
              あなた自身が、自分の身体を理解し、<br />
              整え、続けられるようになることを大切にしています。
            </p>
          </div>
        </div>
      </section>
      
      {/* Courses Section */}
      <section className="courses-section container section" id="courses">
        <h2 className="section-title serif text-center">2つの入口コース</h2>
        <div className="courses-grid">
          <div className="course-card">
            <h3 className="course-title serif">膝・腰 コース</h3>
            <p className="course-target">腰の重だるさ・膝の違和感・<br/>歩行や階段が気になる方へ</p>
            <ul className="course-features">
              <li>骨盤・股関節・膝・足部の動きに着目</li>
              <li>立つ・座る・歩くなどの日常動作を確認</li>
              <li>日常動作の負担を軽減し、動きやすさへ</li>
            </ul>
          </div>
          <div className="course-card">
            <h3 className="course-title serif">首・肩 コース</h3>
            <p className="course-target">首や肩のこり・姿勢の崩れ・<br/>呼吸の浅さが気になる方へ</p>
            <ul className="course-features">
              <li>頭頸部・胸郭・肩甲骨の動きに着目</li>
              <li>呼吸・デスクワーク姿勢を確認</li>
              <li>腕の使い方・日常の負担を軽減</li>
            </ul>
          </div>
        </div>
        <p className="courses-note text-center">
          どちらのコースも、同じ5層アプローチをベースに進めます。入口と重視する部位が異なるだけです。
        </p>
      </section>

      {/* Roadmap Section */}
      <section className="roadmap-section container section">
        <h2 className="section-title serif text-center">12週間・3ヶ月の進め方</h2>
        <div className="roadmap-steps">
          <div className="step">
            <div className="step-period">1〜2週</div>
            <div className="step-layer">LAYER 00-01</div>
            <h4 className="step-title">安全確認・<br/>邪魔を外す</h4>
            <div className="step-icon">🛡️</div>
          </div>
          <div className="step-arrow">▶</div>
          <div className="step">
            <div className="step-period">3〜4週</div>
            <div className="step-layer">LAYER 01-02</div>
            <h4 className="step-title">感覚入力・<br/>身体への気づき</h4>
            <div className="step-icon">🧘‍♀️</div>
          </div>
          <div className="step-arrow">▶</div>
          <div className="step">
            <div className="step-period">5〜8週</div>
            <div className="step-layer">LAYER 03</div>
            <h4 className="step-title">整う条件を<br/>設計する</h4>
            <div className="step-icon">⚙️</div>
          </div>
          <div className="step-arrow">▶</div>
          <div className="step">
            <div className="step-period">9〜10週</div>
            <div className="step-layer">LAYER 04</div>
            <h4 className="step-title">頑張らない<br/>身体づくり</h4>
            <div className="step-icon">🌸</div>
          </div>
          <div className="step-arrow">▶</div>
          <div className="step">
            <div className="step-period">11〜12週</div>
            <div className="step-layer">LAYER 05</div>
            <h4 className="step-title">身体観を<br/>広げる</h4>
            <div className="step-icon">👁️</div>
          </div>
        </div>
        <p className="roadmap-note text-center">
          3ヶ月を通して、苦手な動きや負担のかかりやすい姿勢、役立つセルフケア、動きやすくなる条件が明確になります。
        </p>
      </section>

      {/* 5 Layers Overview */}
      <section className="layers-overview-section container section">
        <h2 className="section-title serif text-center">5層アプローチ</h2>
        <div className="layers-grid">
          {/* Layer Cards */}
          <a href="/layer00" className="layer-card layer-00">
            <div className="layer-header">LAYER 00</div>
            <h4 className="layer-title">注意サインの確認</h4>
            <img src="/layer00.png" alt="LAYER 00" className="layer-image" />
            <p className="layer-desc">身体の状態を確認し、<br/>安全に進める土台をつくる</p>
            <span className="layer-link">詳細を見る →</span>
          </a>
          <a href="/layer01" className="layer-card layer-01">
            <div className="layer-header">LAYER 01</div>
            <h4 className="layer-title">邪魔を外す</h4>
            <img src="/layer01.png" alt="LAYER 01" className="layer-image" />
            <p className="layer-desc">筋・関節・神経などの<br/>阻害要因を取り除く</p>
            <span className="layer-link">詳細を見る →</span>
          </a>
          <a href="/layer02" className="layer-card layer-02">
            <div className="layer-header">LAYER 02</div>
            <h4 className="layer-title">身体への気づき</h4>
            <img src="/layer02.png" alt="LAYER 02" className="layer-image" />
            <p className="layer-desc">感覚入力を通して、<br/>身体の感覚を更新する</p>
            <span className="layer-link">詳細を見る →</span>
          </a>
          <a href="/layer03" className="layer-card layer-03">
            <div className="layer-header">LAYER 03</div>
            <h4 className="layer-title">整う条件を設計する</h4>
            <img src="/layer03.png" alt="LAYER 03" className="layer-image" />
            <p className="layer-desc">姿勢・動作・環境を<br/>整う条件として設計する</p>
            <span className="layer-link">詳細を見る →</span>
          </a>
          <a href="/layer04" className="layer-card layer-04">
            <div className="layer-header">LAYER 04</div>
            <h4 className="layer-title">頑張らない身体づくり</h4>
            <img src="/layer04.png" alt="LAYER 04" className="layer-image" />
            <p className="layer-desc">無理なく力が発揮できる<br/>身体を育てる</p>
            <span className="layer-link">詳細を見る →</span>
          </a>
          <a href="/layer05" className="layer-card layer-05">
            <div className="layer-header">LAYER 05</div>
            <h4 className="layer-title">身体観を広げる</h4>
            <img src="/layer05.png" alt="LAYER 05" className="layer-image" />
            <p className="layer-desc">文化・進化・感覚を通して、<br/>身体の見方を広げる</p>
            <span className="layer-link">詳細を見る →</span>
          </a>
        </div>
      </section>
      
    </main>
  );
}

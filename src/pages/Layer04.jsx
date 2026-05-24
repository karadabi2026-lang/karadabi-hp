import React from 'react';
import './Layer00.css';
import './Layer04.css';

export function Layer04() {
  return (
    <main className="layer-page">
      <div className="layer-header-banner layer04-theme">
        <div className="container">
          <div className="layer-badge">LAYER 04</div>
          <h1 className="serif">頑張らない身体づくり</h1>
          <p className="layer-subtitle">整った身体を、日常の動きへ。<br/>体芯力で、力を抜きながら力が出る身体を育てる。</p>
        </div>
      </div>

      <section className="container section">
        <div className="layer-intro-grid">
          <div className="layer-intro-text">
            <p>身体を頑張らせすぎると、かえって固く、疲れやすくなります。<br />
            余計な力を抜き、身体の芯から支えが生まれると、<br />
            立つ・座る・歩く・呼吸する日常の動きが自然に軽くなります。<br />
            それが、カラダビのLAYER 04です。</p>
            <div className="mt-4">
              <a href="#taishin" className="btn btn-primary w-100 mb-2">体芯力で扱う働きを見る ＞</a>
              <a href="/layer05" className="btn btn-outline w-100">次の5層を見る ＞</a>
            </div>
          </div>
          <div className="layer-intro-image">
            <img src="/layer04.png" alt="頑張らない身体づくり" className="main-layer-img" />
          </div>
          <div className="layer-intro-alert">
            <h4 className="mb-2">4層で育てる4つの感覚</h4>
            <div className="sense-list">
              <div className="sense-item"><span>01</span> 力を抜く</div>
              <div className="sense-item"><span>02</span> 身体の芯から動く</div>
              <div className="sense-item"><span>03</span> 日常動作へ落とし込む</div>
              <div className="sense-item"><span>04</span> 崩れても自分で戻せる</div>
            </div>
          </div>
        </div>
      </section>

      <section className="gray-bg section" id="taishin">
        <div className="container">
          <h3 className="section-title text-center">体芯力®で扱う主な働き</h3>
          <p className="text-center mb-4">体芯力体操 32種 ＋ 応用体操17種の中から、日常に活かしやすい要素を中心に扱います。</p>
          
          <div className="taishin-grid">
            <div className="taishin-card">
              <div className="icon">🫁</div>
              <h4>呼吸</h4>
              <p>呼吸は身体の力みの鏡。自然に呼吸が入る身体へ。呼吸は力みを映す鏡です。</p>
            </div>
            <div className="taishin-card">
              <div className="icon">🦴</div>
              <h4>背骨</h4>
              <p>背骨は動きの軸。しなやかに動く背骨を育て、全身の動きをつなげます。</p>
            </div>
            <div className="taishin-card">
              <div className="icon">🦋</div>
              <h4>肩甲骨</h4>
              <p>肩甲骨の動きが、腕・呼吸・姿勢を変えます。やさしく、広く動かします。</p>
            </div>
            <div className="taishin-card">
              <div className="icon">⚖️</div>
              <h4>骨盤・股関節</h4>
              <p>上半身と下半身をつなぐ中心。骨盤と股関節の連動で、楽に力が伝わります。</p>
            </div>
            <div className="taishin-card">
              <div className="icon">🚶</div>
              <h4>立つ・座る・歩く</h4>
              <p>日常の基本動作こそ、身体づくりの本丸。毎日の動きを整えます。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container section">
        <h3 className="section-title text-center">日常への落とし込み例</h3>
        <p className="text-center mb-4">特別な時間がなくても、いつもの動きの中で身体は変わります。</p>
        
        <div className="routine-grid">
          <div className="routine-item">
            <div className="icon">🌅</div>
            <h5>起床時</h5>
            <p>呼吸を整えながら、背骨をゆっくり動かす。</p>
          </div>
          <div className="routine-item">
            <div className="icon">🪥</div>
            <h5>歯磨き中</h5>
            <p>足裏の感覚を感じて、片脚でバランスをとる。</p>
          </div>
          <div className="routine-item">
            <div className="icon">🪑</div>
            <h5>椅子に座る</h5>
            <p>首を立てずに、骨盤から静かに座る。</p>
          </div>
          <div className="routine-item">
            <div className="icon">🧍</div>
            <h5>立ち上がる</h5>
            <p>股関節に上半身を乗せて、スッと立ち上がる。</p>
          </div>
          <div className="routine-item">
            <div className="icon">🚶</div>
            <h5>歩く</h5>
            <p>脚だけで歩かず、中心から動いて歩く。</p>
          </div>
          <div className="routine-item">
            <div className="icon">🪜</div>
            <h5>階段</h5>
            <p>膝だけで踏ん張らず、体幹と股関節を使う。</p>
          </div>
          <div className="routine-item">
            <div className="icon">🌙</div>
            <h5>就寝前</h5>
            <p>呼吸を整え、一日の力みをリセット。</p>
          </div>
        </div>
      </section>

      <section className="gray-bg section">
        <div className="container">
          <div className="recommend-faq-grid">
            <div className="recommend-box">
              <h3 className="serif mb-4">こんな方におすすめです</h3>
              <ul className="check-list">
                <li>筋トレやストレッチを頑張っているのに変わりにくい</li>
                <li>運動すると、逆に疲れる</li>
                <li>姿勢を良くしようとすると身体が固まる</li>
                <li>歩き出しが重い</li>
                <li>立ち上がりで膝や腰に力が入る</li>
                <li>呼吸が浅い、肩や首に力が入りやすい</li>
                <li>年齢とともに動きが硬くなってきた</li>
                <li>自分で身体を整える方法を身につけたい</li>
              </ul>
            </div>
            
            <div className="ba-grid" style={{flexDirection: 'column', gap: '20px'}}>
              <div className="ba-box before">
                <h5>Before</h5>
                <ul>
                  <li>身体を良くするために、もっと頑張る</li>
                  <li>力を入れて姿勢を保つ</li>
                  <li>歩くとき、脚だけで踏ん張る</li>
                  <li>疲れた時に、自分で戻せない</li>
                </ul>
              </div>
              <div className="ba-box after">
                <h5>After</h5>
                <ul>
                  <li>力を抜いても、身体が支えられる</li>
                  <li>歩き出しや立ち上がりが軽い</li>
                  <li>必要な時に、必要な場所から力が出る</li>
                  <li>疲れた時に、自分で戻せる</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container section text-center">
        <p className="layer-notice">
          体芯力®は、一般社団法人日本体芯力協会の登録商標です。<br/>
          本ページは、カラダビメソッドにおける第4層として、体芯力の考え方を一般向けに紹介するものです。
        </p>
      </section>
    </main>
  );
}

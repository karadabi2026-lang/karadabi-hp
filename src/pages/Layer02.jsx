import React from 'react';
import './Layer00.css';
import './Layer02.css';

export function Layer02() {
  return (
    <main className="layer-page">
      <div className="layer-header-banner layer02-theme">
        <div className="container">
          <div className="layer-badge">LAYER 02</div>
          <h1 className="serif">身体への気づき</h1>
          <p className="layer-subtitle">入力と反応評価で、身体地図を更新する</p>
        </div>
      </div>

      <section className="container section">
        <div className="layer-intro-grid">
          <div className="layer-intro-text">
            <p>全身からの感覚入力と具体的なワークを通して、<br />
            脳と身体の反応を評価しながら、<br />
            その人に合う動き方を見つけ、<br />
            より適切でスムーズな動きにつなげていきます。</p>
            <div className="mt-4">
              <a href="#elements" className="btn btn-primary w-100 mb-2">身体地図とは？ ＞</a>
              <a href="#flow" className="btn btn-outline w-100 mb-2">ワークの流れを見る ＞</a>
              <a href="/layer05" className="btn btn-outline w-100">代表ワークを見る ＞</a>
            </div>
          </div>
          <div className="layer-intro-image">
            <img src="/layer02.png" alt="身体への気づき" className="main-layer-img" />
          </div>
          <div className="layer-intro-alert">
            <h4 className="mb-2">感覚入力のポイント</h4>
            <div className="diagram-list">
              <div className="dia-item">👁️ 視覚・眼球</div>
              <div className="dia-item">👂 前庭・バランス感覚</div>
              <div className="dia-item">🦶 足裏・接地感</div>
              <div className="dia-item">🫁 呼吸・胸郭</div>
            </div>
          </div>
        </div>
      </section>

      <section className="gray-bg section">
        <div className="container">
          <div className="flex-card">
            <div>
              <h3 className="serif mb-2">LAYER 02で大切にすること</h3>
              <p>身体を整える前に、まず大切なのは、今の自分の身体を正しく感じることです。<br/>
              人は、自分の身体を分かっているようで、実際には左右差、重心のズレ、<br/>
              力み、呼吸の止まり、関節の位置感覚に気づけていないことがあります。<br/>
              その状態で無理に鍛えたり、正しい動きを覚えようとしても、<br/>
              身体は以前のクセや代償のまま動こうとします。<br/>
              カラダビでは、全身からの感覚入力と具体的な運動課題を組み合わせながら、<br/>
              ワーク前後の反応を確認し、その人に合う動き方を探していきます。</p>
            </div>
            <div className="big-quote">
              全身から入力し、<br/>
              反応を見て、<br/>
              その人に合う動き方を見つける。
            </div>
          </div>
        </div>
      </section>

      <section className="container section" id="elements">
        <h3 className="section-title text-center">身体地図をつくる12の要素</h3>
        <div className="elements-grid">
          <div className="element-box">
            <div className="num">1</div>
            <h5>部位の認識</h5>
            <p>自分の身体のどこを使っているかを感じる力。</p>
          </div>
          <div className="element-box">
            <div className="num">2</div>
            <h5>関節の位置感覚</h5>
            <p>関節がどの位置にあるかを感じる力。</p>
          </div>
          <div className="element-box">
            <div className="num">3</div>
            <h5>動きの方向感覚</h5>
            <p>身体が前後・左右・回旋のどちらへ動いているかを感じる力。</p>
          </div>
          <div className="element-box">
            <div className="num">4</div>
            <h5>力加減の感覚</h5>
            <p>必要な力と余計な力みを区別する感覚。</p>
          </div>
          <div className="element-box">
            <div className="num">5</div>
            <h5>左右差の認識</h5>
            <p>左右で動きやすさや安定感の違いに気づく力。</p>
          </div>
          <div className="element-box">
            <div className="num">6</div>
            <h5>重心感覚</h5>
            <p>自分の重心がどこにあるかを感じる力。</p>
          </div>
          <div className="element-box">
            <div className="num">7</div>
            <h5>支持基底面の感覚</h5>
            <p>足裏や座面など、支える面との関係を感じる力。</p>
          </div>
          <div className="element-box">
            <div className="num">8</div>
            <h5>視覚・前庭・体性感覚の統合</h5>
            <p>眼・平衡感覚・身体感覚を合わせてバランスを取る力。</p>
          </div>
          <div className="element-box">
            <div className="num">9</div>
            <h5>呼吸と身体連動</h5>
            <p>呼吸を通して胸郭・横隔膜・腹部・骨盤周りの動きを感じる力。</p>
          </div>
          <div className="element-box">
            <div className="num">10</div>
            <h5>頭頸部・顎・口腔の感覚</h5>
            <p>顔・舌・口腔・頭部・首からの感覚入力を感じる力。</p>
          </div>
          <div className="element-box">
            <div className="num">11</div>
            <h5>代償動作の認識</h5>
            <p>本来動かしたい部位ではなく、別の部位で補っている動きに気づく力。</p>
          </div>
          <div className="element-box">
            <div className="num">12</div>
            <h5>予測とフィードバック</h5>
            <p>動く前に準備し、動いた後に微調整する力。</p>
          </div>
        </div>
      </section>

      <section className="container section" id="flow">
        <h3 className="section-title text-center">入力から、動きの再学習までの流れ</h3>
        <div className="flow-steps">
          <div className="flow-step">
            <div className="step-icon">📋</div>
            <h4>アセスメント</h4>
            <p>可動域、安定性、痛み、左右差、動きやすさを確認します。</p>
          </div>
          <div className="flow-arrow">▶</div>
          <div className="flow-step">
            <div className="step-icon">🧘‍♀️</div>
            <h4>入力ワーク</h4>
            <p>眼、首、目、前庭、呼吸、足裏、関節などに対してワークを行います。</p>
          </div>
          <div className="flow-arrow">▶</div>
          <div className="flow-step">
            <div className="step-icon">🔄</div>
            <h4>再評価</h4>
            <p>もう一度同じ動きを確認し、身体の反応を見ます。</p>
          </div>
          <div className="flow-arrow">▶</div>
          <div className="flow-step">
            <div className="step-icon">✅</div>
            <h4>反応判定</h4>
            <p>良い反応・変化が少ない、反応・悪い反応に分けて確認します。</p>
          </div>
          <div className="flow-arrow">▶</div>
          <div className="flow-step">
            <div className="step-header">個別プログラム化</div>
            <p>反応が良いワークを、その人に合うセルフケアとして抽出します。</p>
          </div>
          <div className="flow-arrow">▶</div>
          <div className="flow-step">
            <div className="step-header">日常に定着</div>
            <p>朝・仕事前・休憩中・寝る前などに取り入れます。</p>
          </div>
        </div>
      </section>

    </main>
  );
}

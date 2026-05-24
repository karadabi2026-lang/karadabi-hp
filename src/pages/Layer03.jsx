import React from 'react';
import './Layer00.css';
import './Layer03.css';

export function Layer03() {
  return (
    <main className="layer-page">
      <div className="layer-header-banner layer03-theme">
        <div className="container">
          <div className="layer-badge">LAYER 03</div>
          <h1 className="serif">整う条件を設計する<br/>ENCOMPASS</h1>
          <p className="layer-subtitle">鍛える前に、身体が自然に整う条件を見つける。</p>
        </div>
      </div>

      <section className="container section">
        <div className="layer-intro-grid">
          <div className="layer-intro-text">
            <p>姿勢、支持面、速度、重心、呼吸、感覚入力。<br />
            身体に無理をさせるのではなく、<br />
            自然に動きがまとまる条件を一緒に探します。</p>
            <div className="mt-4">
              <a href="#encompass" className="btn btn-primary w-100 mb-2">自分の身体が整う条件を相談する ＞</a>
              <a href="/layer05" className="btn btn-outline w-100">ENCOMPASSを体験する ＞</a>
            </div>
          </div>
          <div className="layer-intro-image">
            <img src="/layer03.png" alt="ENCOMPASS" className="main-layer-img" />
          </div>
          <div className="layer-intro-alert">
            <h4 className="mb-2">整うための主な条件</h4>
            <ul className="obstacle-list">
              <li>姿勢と支持面</li>
              <li>力の向きと位置</li>
              <li>呼吸と重心</li>
              <li>感覚入力と注意</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="gray-bg section text-center" id="encompass">
        <div className="container">
          <h2 className="serif mb-2">ENCOMPASSとは</h2>
          <p>身体に無理をさせるのではなく、身体が自然に整う条件を見つけるシステムです。</p>
          
          <div className="encompass-features mt-4">
            <div className="enc-feature">
              <div className="num">01</div>
              <h4>条件を整える</h4>
              <p>姿勢、支え方、速度、重心、呼吸を調整します。</p>
            </div>
            <div className="enc-feature">
              <div className="num">02</div>
              <h4>崩れる条件を見つける</h4>
              <p>どんな時に力みや痛みがでるかを確認します。</p>
            </div>
            <div className="enc-feature">
              <div className="num">03</div>
              <h4>整う条件から始める</h4>
              <p>「これならできる」という成功体験から進めます。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container section">
        <h3 className="section-title text-center">3層で行うこと</h3>
        <p className="text-center mb-4">痛みを我慢して頑張るのではなく、身体が整う条件を見つけ、少しずつ日常へ戻していきます。</p>
        <div className="flow-steps">
          <div className="flow-step">
            <div className="step-header">STEP 01</div>
            <h4>崩れる条件を見つける</h4>
            <p>動きが崩れるスイッチを探す</p>
          </div>
          <div className="flow-arrow">▶</div>
          <div className="flow-step">
            <div className="step-header">STEP 02</div>
            <h4>整う条件を見つける</h4>
            <p>これなら動ける条件を探す</p>
          </div>
          <div className="flow-arrow">▶</div>
          <div className="flow-step">
            <div className="step-header">STEP 03</div>
            <h4>条件を少しずつ戻す</h4>
            <p>日常に近い条件へ戻す</p>
          </div>
          <div className="flow-arrow">▶</div>
          <div className="flow-step">
            <div className="step-header">STEP 04</div>
            <h4>日常動作へつなげる</h4>
            <p>生活の中で自然に整えるようにする</p>
          </div>
        </div>
      </section>

      <section className="container section">
        <h3 className="section-title text-center">13軸の条件設計</h3>
        <p className="text-center mb-4">身体は、重さや回数だけで変わるわけではありません。<br/>力・姿勢・動き・感覚・注意の条件を調整することで、身体が自然に整う条件を探していきます。</p>
        
        <div className="axis-grid">
          <div className="axis-group">
            <h4 className="axis-title">力の条件<br/><small>(5つの軸)</small></h4>
            <ul>
              <li><strong>強度</strong> (力の強さ)</li>
              <li><strong>位置</strong> (力のかかる位置)</li>
              <li><strong>方向</strong> (力の向き)</li>
              <li><strong>継続時間</strong> (力をかける時間)</li>
              <li><strong>頻度</strong> (力の頻度)</li>
            </ul>
          </div>
          <div className="axis-group">
            <h4 className="axis-title">姿勢と動きの条件<br/><small>(4つの軸)</small></h4>
            <ul>
              <li><strong>速度</strong> (動く速さ)</li>
              <li><strong>変動性</strong> (リズムの変化)</li>
              <li><strong>体位</strong> (身体の姿勢)</li>
              <li><strong>支持基底面</strong> (支え方・広さ)</li>
              <li><strong>片側・両側</strong> (使い方の違い)</li>
              <li><strong>重心移動</strong> (重心の移し方)</li>
              <li><strong>タイミング</strong> (動きの合わせ方)</li>
            </ul>
          </div>
          <div className="axis-group">
            <h4 className="axis-title">感覚と注意の条件<br/><small>(4つの軸)</small></h4>
            <ul>
              <li><strong>視覚</strong> (見る情報)</li>
              <li><strong>感覚入力</strong> (触れる・感じる)</li>
              <li><strong>注意</strong> (意識の向け方)</li>
              <li><strong>二重課題</strong> (同時に行う課題)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="gray-bg section">
        <div className="container">
          <h3 className="section-title text-center">症状別に見る、3層の考え方</h3>
          <p className="text-center mb-4">症状が出る場所だけを見るのではなく、どの条件で身体のつながりが崩れるかを見ていきます。</p>
          
          <div className="cases-grid">
            <div className="case-card">
              <h4 className="case-title">肩・首の場合</h4>
              <p className="case-subtitle">首を緊張させず、胸郭と肩甲骨が動く条件へ</p>
              <div className="ba-grid">
                <div className="ba-box before">
                  <h5>Before</h5>
                  <ul>
                    <li>腕を上げると首がすくむ</li>
                    <li>首が前に出る</li>
                    <li>呼吸が浅い</li>
                    <li>肩甲骨が動かない</li>
                  </ul>
                </div>
                <div className="ba-box after">
                  <h5>Re-design</h5>
                  <ul>
                    <li>低い負荷から始める</li>
                    <li>仰向けや座位で首が落ち着く条件を探す</li>
                    <li>呼吸と視線を整える</li>
                    <li>胸郭と肩甲骨が共に動く感覚をつくる</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="case-card">
              <h4 className="case-title">腰・膝の場合</h4>
              <p className="case-subtitle">腰や膝で支えず、骨盤帯と股関節が動く条件へ</p>
              <div className="ba-grid">
                <div className="ba-box before">
                  <h5>Before</h5>
                  <ul>
                    <li>立つと腰で踏ん張る</li>
                    <li>歩くと膝がぶれる</li>
                    <li>片脚で骨盤が安定しない</li>
                    <li>階段で膝に負担が出る</li>
                  </ul>
                </div>
                <div className="ba-box after">
                  <h5>Re-design</h5>
                  <ul>
                    <li>座位で体重移動を確認する</li>
                    <li>足幅や支持面を調整する</li>
                    <li>ゆっくりした重心移動から始める</li>
                    <li>股関節に乗れる感覚を探す</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="recommend-faq-grid">
          <div className="recommend-box">
            <h3 className="serif mb-4">こんな方におすすめです</h3>
            <ul className="check-list">
              <li>マッサージを受けても、すぐ戻ってしまう</li>
              <li>首、肩、腰、膝に負担が集まりやすい</li>
              <li>筋トレをしているのに、動きが楽にならない</li>
              <li>歩く、立つ、座る、腕を上げる動作で力みや違和感がある</li>
              <li>ストレッチしても、身体の使い方が変わらない</li>
              <li>自分の身体を、自分で整えられるようになりたい</li>
            </ul>
          </div>
          
          <div className="faq-box">
            <h3 className="serif mb-4">よくある質問</h3>
            <div className="faq-list">
              <div className="faq-item">
                <div className="faq-q">ENCOMPASSは筋トレですか？ <span className="plus">+</span></div>
              </div>
              <div className="faq-item">
                <div className="faq-q">痛みがあってもできますか？ <span className="plus">+</span></div>
              </div>
              <div className="faq-item">
                <div className="faq-q">普通のマシンを使う理由は何ですか？ <span className="plus">+</span></div>
              </div>
              <div className="faq-item">
                <div className="faq-q">普通のピラティスやトレーニングと何が違いますか？ <span className="plus">+</span></div>
              </div>
              <div className="faq-item">
                <div className="faq-q">どれくらいで変化しますか？ <span className="plus">+</span></div>
              </div>
              <div className="faq-item">
                <div className="faq-q">どんな人に向いていますか？ <span className="plus">+</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

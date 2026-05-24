import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-cta">
        <h2 className="serif">自分に合う入口コースを相談する</h2>
        <p>あなたの状態や目的に合わせて、最適なコースをご提案します。</p>
        <div className="footer-actions">
          <a href="#" className="btn-line">LINEで相談する</a>
          <a href="#" className="btn btn-primary">お問い合わせ</a>
        </div>
        <div className="cta-badge">
          <span>相談無料</span>
          <small>お気軽にご相談ください</small>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-links">
          <a href="#">プライバシーポリシー</a>
          <span>|</span>
          <a href="#">特定商取引法に基づく表記</a>
          <span>|</span>
          <a href="#">お問い合わせ</a>
        </div>
        <div className="copyright">
          &copy; 2026 SHINTAIBI
        </div>
      </div>
    </footer>
  );
}

export default Footer;

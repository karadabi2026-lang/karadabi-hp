import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          <Link to="/">
            <img src="/logo.png" alt="カラダビ" className="logo-icon" />
            <div className="logo-text">
              <span className="logo-main">身体美</span>
              <span className="logo-sub">KARADABI</span>
            </div>
          </Link>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li><Link to="/">カラダビとは</Link></li>
            <li><Link to="/layer00">0層：安全確認</Link></li>
            <li><Link to="/layer01">1層：邪魔を外す</Link></li>
            <li><Link to="/layer02">2層：身体への気づき</Link></li>
            <li><Link to="/layer03">3層：整う条件</Link></li>
            <li><Link to="/layer04">4層：頑張らない</Link></li>
            <li><Link to="/layer05">5層：身体観</Link></li>
          </ul>
        </nav>
        <div className="header-actions">
          <a href="#" className="btn-line">LINEで相談する</a>
          <a href="#" className="btn btn-outline">お問い合わせ</a>
        </div>
      </div>
    </header>
  );
}

export default Header;

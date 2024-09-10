import { useState } from 'react';
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

  };
  return (
    <div>
     <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <a className="home" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="about" href="#aboutus">
              About Us
            </a>
          </li>
          <li>
            <a className="impact" href="#ourimpact">
              Our Impact
            </a>
          </li>
          <li>
            <a className="why" href="#whysvantero">
              Why Svantaro?
            </a>
          </li>
          <li>
            <a className="blogs" href="#blogs">
              Blogs
            </a>
          </li>
        </ul>
        <button className="learn-more">LEARN MORE</button>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
    </div>
  )
}

export default Header

import './Header.css'

const Header = () => {
  return (
    <div>
      <header className="header">
      <div className="logo">
        {/* Replace with your logo */}
        <img src="/logo.png" alt="Logo" />
      </div>
      <nav className="navbar">
        <ul>
          <li><a className='home' href="#home">Home</a></li>
          <li><a className='about' href="#aboutus">About Us</a></li>
          <li><a className='impact' href="#ourimpact">Our Impact</a></li>
          <li><a className='why' href="#whysvantero">Why Svantaro?</a></li>
          <li><a className='blogs' href="#blogs">Blogs</a></li>
        </ul>
        <button className="learn-more">LEARN MORE</button>
      </nav>
    </header>
    </div>
  )
}

export default Header

import React from 'react';
import './Header.css'; // Optional: for styling

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__logo">
          <img
            src="https://th.bing.com/th/id/OIP.yFntEIlyXX_lqLiVyjAFaAHaH_?rs=1&pid=ImgDetMain"
            alt="Travel Logo"
            style={{ height: '40px', verticalAlign: 'middle', marginRight: '10px' }}
          />
        </div>
        <ul className="header__links">
          <li><a href="/">Home</a></li>
          <li><a href="/destinations">Destinations</a></li>
          <li><a href="/bookings">Bookings</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

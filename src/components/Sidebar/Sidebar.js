import React, { useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import rozetkaLogo from './rozetka.png';

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleToggle = () => {
    setShow(!show);
  };

  const handleSearchSubmit = () => {
    console.log('Выполнение поиска');
  };

  return (
    <main className={show ? 'space-toggle' : null}>
      <header className={`header ${show ? 'space-toggle' : null}`}>
        <div className='header-toggle' onClick={handleToggle}>
          <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>
        </div>
        <div className="logo-container">
          <img src={rozetkaLogo} alt="Rozetka" className="rozetka-logo" />
        </div>
        <div className="search-bar-container">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Я ищу..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="search-button" onClick={handleSearchSubmit}>
              <i className="fas fa-search"></i>
              Найти
            </button>
            <button className="search-button">
              <i className="fas fa-microphone"></i>
            </button>
          </div>
        </div>
        <div className="cart-icon" onClick={() => addToCart("Product")}>
          <i className="fas fa-shopping-cart"></i>
          <span className="cart-count">{cartItems.length}</span>
        </div>
      </header>

      <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className='nav'>
          <div>
            <Link to='/' className='nav-logo'>
              <i className={`fas fa-home-alt nav-logo-icon`}></i>
              <span className='nav-logo-name'>Каталог-товаров</span>
            </Link>

            <div className='nav-list'>
              <Link to='/dashboard' className='nav-link active'>
                <i className='fa-regular fa-circle-question'></i>
                <span className='nav-link-name'>Справочный центр</span>
              </Link>
              <Link to='/hotel' className='nav-link'>
                <i className='fa-solid fa-paper-plane'></i>
                <span className='nav-link-name'>Чат с ROZETKA</span>
              </Link>
              <Link to='/gallery' className='nav-link'>
                <i className='fa-regular fa-clipboard'></i>
                <span className='nav-link-name'>Мои заказы</span>
              </Link>
              <Link to='/gallery' className='nav-link'>
                <i className='fa-solid fa-heart'></i>
                <span className='nav-link-name'>Списки желаний</span>
              </Link>
            </div>
          </div>

          <Link to='/logout' className='nav-link'>
            <i className='fas fa-sign-out nav-link-icon'></i>
            <span className='nav-link-name'>Выйти</span>
          </Link>
        </nav>
      </aside>

      
    </main>
  );
};

export default Sidebar;

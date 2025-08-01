import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { Storecontext } from '../../Context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, isLoggedIn } = useContext(Storecontext);

  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate(); // To navigate to search page

  const handleSearch = () => {
    const query = searchQuery.trim();
    if (query !== "") {
      console.log("Searching for:", query);
      // Navigate to a search results page, pass query as param
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className='navbar'>
      {/* Logo */}
      <Link to='/'>
        <img src={assets.logo} className="logo" alt="App Logo" />
      </Link>

      {/* Menu */}
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile App</a>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
      </ul>

      {/* Right Section */}
      <div className="navbar-right">
        {/* Search Section */}
        <div className="navbar-search">
          {showSearch && (
            <input
              type="text"
              placeholder="Search foods..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              className="navbar-search-input"
            />
          )}
          <img
            src={assets.search_icon}
            alt="Search"
            onClick={() => {
              if (showSearch) handleSearch();
              setShowSearch(!showSearch);
            }}
            style={{ cursor: "pointer" }}
          />
        </div>

        {/* Cart */}
        <div className="navbar-search-icon">
          <Link to='/cart'>
            <img src={assets.basket_icon} alt="Cart" />
          </Link>
          {getTotalCartAmount() > 0 && <div className="dot"></div>}
        </div>

        {/* Profile / Sign In */}
        {!isLoggedIn ? (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        ) : (
          <Link to="/profile">
            <img
              src={assets.profile_icon}
              alt="Profile"
              className="navbar-profile-icon"
              style={{ cursor: 'pointer' }}
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

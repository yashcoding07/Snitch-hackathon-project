import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { RiMenu3Line } from "@remixicon/react";
import "./Nav.css"; // Make sure to check Nav.css for any background image paths too!

const Nav = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isvisible, setisvisible] = useState(true);
  const [lastscrollY, setlastscrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuOpen(false); // Close mobile menu when switching to desktop
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only apply auto-hide behavior on desktop or when mobile menu is closed
      if (!isMobile || !menuOpen) {
        if (currentScrollY < lastscrollY) {
          setisvisible(true);
        } else if (currentScrollY > lastscrollY && currentScrollY > 100) {
          setisvisible(false);
        }
      }
      
      setlastscrollY(currentScrollY);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastscrollY, isMobile, menuOpen]);

  // Function to close menu when nav links are clicked (mobile only)
  const handleNavClick = () => {
    if (isMobile) {
      setMenuOpen(false);
    }
  };

  return (
    <div className={`navbar ${isvisible ? 'navbar-visible' : 'navbar-hidden'}`}>
      <div className="logo">
        <img
          onClick={() => {
            navigate("/");
            handleNavClick(); // Close menu when logo is clicked
          }}
          // Corrected image path: removed 'public/'
          src="/Navbar/logo.webp" 
          alt="Logo"
        />
      </div>

      <div className={`links ${menuOpen ? 'open' : ''}`}>
        <NavLink to={'/'} onClick={handleNavClick}>Home</NavLink>
        <NavLink to={'/About'} onClick={handleNavClick}>About Us</NavLink>
        <NavLink to={'/Products'} onClick={handleNavClick}>Products</NavLink>
        <button 
          className="loginbtn" 
          onClick={() => {
            navigate("/Login");
            handleNavClick(); // Close menu when login is clicked
          }}
        >
          Login
        </button>
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <RiMenu3Line size={30} />
      </div>
    </div>
  );
};

export default Nav;
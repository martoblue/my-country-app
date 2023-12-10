import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    backgroundColor:
      scrollPosition > 20 ? 'rgba(63, 110, 157, 0.8)' : 'rgba(63, 110, 157, 1)',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    backdropFilter: scrollPosition > 20 ? 'blur(10px)' : 'none',
  };

  return (
    <nav className={styles.navbar} id='navbar' style={navbarStyle}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About Us</Link>
        </li>
        <li>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

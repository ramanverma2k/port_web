import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';

export default function Navbar() {
  const [isVisible, setVisible] = useState(false);

  return (
    <nav className={style.navbar}>
      <NavLink
        to="/"
        className={style.navbar__home}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        {isVisible ? 'Raman Verma' : '@ramanverma2k'}
      </NavLink>
      <div className={style.routes}>
        <NavLink
          to="/journey"
          className={({ isActive }) => (isActive ? style.link__active : style.link)}
        >
          Journey
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? style.link__active : style.link)}
        >
          Projects
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? style.link__active : style.link)}
        >
          About
        </NavLink>
      </div>
    </nav>
  );
}

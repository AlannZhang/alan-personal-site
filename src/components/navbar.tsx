import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink to='/'>Work</NavLink>  
      <NavLink to='/about'>About</NavLink>
    </div>
  );
}

export default NavBar;

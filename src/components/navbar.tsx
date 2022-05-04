import { NavLink } from 'react-router-dom';
import '../styles/navbar.scss';
import '@fontsource/roboto';

const NavBar = () => {
  return (
    <div className='navBar'>
      <NavLink to='/' className='ul'>Home</NavLink>  
      <NavLink to='/about' className='ul'>About</NavLink>
    </div>
  );
}

export default NavBar;

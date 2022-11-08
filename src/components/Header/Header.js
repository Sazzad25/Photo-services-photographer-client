import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {
  const {user,  logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
         .then()
         .catch();
  }
    return (
        <div className="navbar bg-primary ">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li><a>Item 1</a></li>
      <li tabIndex={0}>
        <a>
          Parent
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li>
      {
        user?.email ?
        <li className='font-semibold'>
        <button onClick={handleLogOut} className='btn-ghost'>Sign Out</button>
        </li>
        :
        <li><Link to='/login'>Login</Link></li>
      }
      
    </ul>
  </div>
</div>
    );
};

export default Header;
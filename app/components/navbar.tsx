import React from 'react';
import Link from 'next/link';
import  Theme from './theme';
import LoginButton from '../auth/login-button';

const Navbar = () => {
  return (
    <div className="flex gap-6 items-center">
    <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
      <li> <Link style={{ marginRight: "10px" }} href="/">Home</Link></li>
      <li><Link style={{ marginRight: "10px" }} href="/users">Users</Link></li>
      <LoginButton/>
    </ul>
     <Theme/>
    </div>

  )
}

export default Navbar
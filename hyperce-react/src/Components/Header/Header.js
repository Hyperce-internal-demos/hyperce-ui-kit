import React from 'react';
import logo from '../Hero section/images/hypercelogo.svg';
import {BrowserRouter as Link} from 'react-router-dom';


export default function Header() {
  return (
    <div className="p-4 text-white text-center fixed w-full flex justify-between">
  <div className="flex items-center pl-8"> 
    <img src={logo} alt="Hyperce Logo" className="w-8 h-8 mb-2" />
    <h1 className="text-sm md:text-sm">Hyperce</h1>
  </div>
  <div className='flex pr-8'>
  <div className="pr-8"> 
    <Link to="/login">Login</Link>
  </div>
  <div>
    <Link to="/">Home</Link>
  </div>
  </div>
</div>
  );
}

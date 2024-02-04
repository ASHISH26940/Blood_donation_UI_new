import React from 'react';
import logo from '../assets/header.png';
import './Header.css';
import logo1 from '../assets/4.png';

const Header = () => {
  return (
    <div className="header">
      <div className='pt1'><img src={logo1} alt="Logo" className="logo" style={{ width: '7vw' }} />
      <span className="title">Life <div style={{display:"inline-block",color:"#940a05c2", marginLeft:"-1vh"}}>Line</div></span></div>
      <div className='navs'>
        <span>Home</span>
        <span>Donate</span>
        <span>Receive</span>
        <span className='sp1'>About Us</span>
      </div>
      
    </div>
  );
};

export default Header;

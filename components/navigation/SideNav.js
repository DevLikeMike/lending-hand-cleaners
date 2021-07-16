import React from "react";
import Link from "next/link";

const SideNav = ({ sideOpen, openHandler }) => {
  const onClick = () => {
    openHandler();
  };

  return (
    <div className={sideOpen ? "sideNav open" : "sideNav"}>
      <ul className='sideNav-links'>
        <li className='sideNav-item' onClick={onClick}>
          <Link href='/'>Home</Link>
        </li>
        <li className='sideNav-item' onClick={onClick}>
          <Link href='/about'>About</Link>
        </li>
        <li className='sideNav-item' onClick={onClick}>
          <Link href='/services'>Services</Link>
        </li>
        <li className='sideNav-item' onClick={onClick}>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;

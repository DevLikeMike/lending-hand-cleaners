import { useState } from "react";
import Link from "next/link";
// Component imports
import Hamburger from "./Hamburger";
import SideNav from "./SideNav";
// External imports
import styled from "styled-components";

const Navbar = styled.nav`
  width: 100vw;
  height: 3rem;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: flex-end;
  background-color: #fff;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  z-index: 100;
  @media (min-width: 768px) {
    justify-content: center;
  }
`;

const NavList = styled.ul`
  height: 3rem;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const NavItem = styled.li`
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0 2rem;
  font-size: 1.333rem;
  height: 80%;
  display: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primaryPurple};
    color: #fff;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;

export default function Header() {
  const [sideNavigationOpen, setSideNavigationOpen] = useState(false);

  const openHandler = () => {
    setSideNavigationOpen(!sideNavigationOpen);
  };

  return (
    <Navbar>
      <NavList>
        <NavItem>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </NavItem>

        <NavItem>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </NavItem>

        <NavItem>
          <Link href='/services'>
            <a>Services</a>
          </Link>
        </NavItem>

        <NavItem>
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
        </NavItem>

        <Hamburger
          openHandler={openHandler}
          sideNavigationOpen={sideNavigationOpen}
        />
      </NavList>
      <SideNav sideOpen={sideNavigationOpen} openHandler={openHandler} />
    </Navbar>
  );
}

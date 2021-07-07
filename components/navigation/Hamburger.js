import styled from "styled-components";

const HamburgerContainer = styled.div`
  height: 2rem;
  width: 2rem;
  position: relative;
  margin: auto 1rem;
  cursor: pointer;
  display: none;
  z-index: 200;
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Bar = styled.span`
  width: 100%;
  height: 3px;
  position: absolute;
  left: 0;
  background-color: #000;
  border-radius: 8px;
  transform: rotate(0deg);
  transition: 0.24s ease-in-out;
`;

export default function Hamburger({ openHandler, sideNavigationOpen }) {
  return (
    <HamburgerContainer
      className={
        sideNavigationOpen ? "hamburger-container open" : "hamburger-container"
      }
      onClick={openHandler}
    >
      <Bar></Bar>
      <Bar></Bar>
      <Bar></Bar>
    </HamburgerContainer>
  );
}

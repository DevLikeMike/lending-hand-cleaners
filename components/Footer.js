import styled from "styled-components";
import Link from "next/link";

const Foot = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  min-height: 10vh;
  padding: 1rem;
  color: ${({ theme }) => theme.lightShade};
  background-color: ${({ theme }) => theme.accentDark};

  @media (min-width: 768px) {
    flex-direction: row;
  }

  & > * {
    flex: 1 3;
    margin: 1rem 0;
  }

  h2,
  h3 {
    font-size: 1.3rem;
  }
`;

export default function Footer() {
  return (
    <Foot>
      <h2>Lending Hand Cleaners &copy; 2021</h2>
      <div className='flex flex-center col'>
        <h3>About Us</h3>
        <ul className='flex flex-center col'>
          <Link href='/'>
            <a>Home</a>
          </Link>
          <Link href='/about'>
            <a>About</a>
          </Link>
          <Link href='/services'>
            <a>Services</a>
          </Link>
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
        </ul>
      </div>
      <div className='flex flex-center col'>
        <h3>Contact</h3>
        <ul>
          <li>Crystal Thomas - (423) 608-9223</li>
          <li>Vicki Williamson - (865) 455-7688</li>
          <li>Samantha Moss - (865) 963-9904</li>
        </ul>
      </div>
    </Foot>
  );
}

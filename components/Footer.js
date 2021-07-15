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

  li a:hover,
  .hover:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.primaryBlue};
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
            <a className='hover'>Home</a>
          </Link>
          <Link href='/about'>
            <a className='hover'>About</a>
          </Link>
          <Link href='/services'>
            <a className='hover'>Services</a>
          </Link>
          <Link href='/contact'>
            <a className='hover'>Contact</a>
          </Link>
        </ul>
      </div>
      <div className='flex flex-center col'>
        <h3>Contact</h3>
        <ul>
          <li>
            Crystal Thomas - <a href='tel:4236089223'>(423) 608-9223</a>
          </li>
          <li>
            Vicki Williamson - <a href='tel:8654557688'>(865) 455-7688</a>
          </li>
          <li>
            Samantha Moss - <a href='tel:8659639904'>(865) 963-9904</a>
          </li>
        </ul>
      </div>
    </Foot>
  );
}

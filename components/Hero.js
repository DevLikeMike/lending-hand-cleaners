import styled from "styled-components";
import Link from "next/link";

const HeroContainer = styled.section`
  padding: 1rem 0.5rem;
  margin-top: 3rem;
  background-color: #bcf9ed;
  color: ${({ theme }) => theme.text};
  position: relative;
  min-height: 50vh;
  background-image: url("https://cdn.pixabay.com/photo/2017/09/16/00/42/spray-bottle-2754171_1280.jpg");
  background-size: cover;
  background-position: 90% 15%;
  background-repeat: no-repeat;

  div {
    color: ${({ theme }) => theme.primaryText};
    height: auto;
    max-width: 30rem;
    width: 75%;
    background-color: #fff;
    position: absolute;
    top: 15%;
    right: 0%;
    padding: 1rem 1rem 1.5rem;
    border: #7484bf 2px solid;
    box-shadow: -15px -11px 0px 5px ${({ theme }) => theme.primaryPurple};

    h2 {
      margin-bottom: 1rem;

      @media (min-width: 900px) {
        font-size: 1.74rem;
      }
    }

    p {
      margin-bottom: 1.5rem;
    }

    a {
      width: 10rem;
      text-align: center;
      color: #fff;
      background-color: ${({ theme }) => theme.primaryPurple};
      padding: 0.5rem 1rem;
      border-radius: 8px;
      transition: all 0.3s ease;

      &:hover {
        opacity: 0.9;
      }
    }
  }
`;

export default function Hero() {
  return (
    <HeroContainer>
      <div>
        <h2>We Do It All</h2>
        <p>
          No matter your cleaning needs, we have you covered. We do standard
          cleans, deep cleans, and move out cleans. Our variety of packages
          ensure we have just what you are looking for. Ask for regular
          scheduling for discounts.
        </p>
        <Link href='/'>
          <a className='hero-btn'>Contact Us Now</a>
        </Link>
      </div>
    </HeroContainer>
  );
}

import styled from "styled-components";
import Link from "next/link";

const HeroContainer = styled.section`
  min-height: 50vh;
  padding: 2rem 0.5rem;
  margin-top: 3rem;
  background-image: url("https://images.unsplash.com/photo-1563453392212-326f5e854473?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80");
  background-size: contain;
  background-position: 100% 5%;
  background-repeat: no-repeat;
  background-color: #bcf9ed;
  color: ${({ theme }) => theme.text};
  position: relative;

  @media (min-width: 590px) {
    background-size: cover;
  }

  div {
    width: 65%;
    max-width: 30rem;
    height: auto;
    background-color: #fff;
    position: absolute;
    bottom: 15%;
    left: 15%;
    padding: 1rem 1rem 1.5rem;
    box-shadow: -15px -11px 0px 5px ${({ theme }) => theme.primaryPurple};

    h2 {
      font-size: 1.74rem;
      margin-bottom: 1rem;
    }

    p {
      margin-bottom: 1.5rem;
    }

    a {
      width: 5rem;
      color: #fff;
      background-color: hsl(297, 98%, 33%);
      padding: 0.5rem 1rem;
      border-radius: 8px;
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

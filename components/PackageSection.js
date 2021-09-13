import styled from "styled-components";
import Image from "next/image";

const Package = styled.section`
  display: flex;
  justify-content: space-around;
  gap: 3rem;

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;
    align-items: center;
  }

  .info {
    max-width: 40rem;
  }

  .left {
    order: 0;

    @media (max-width: 900px) {
      order: 1;
    }
  }
  .right {
    order: 1;
  }

  img {
    object-fit: cover;
  }
`;

export default function PackageSection({ children, imgSrc, side, heading }) {
  return (
    <Package>
      <div class={`info ${side}`}>
        <h2>{heading}</h2>
        <p>{children}</p>
      </div>
      <div className='package-img'>
        <Image src={imgSrc} width='375' height='300' className='package-img' />
      </div>
    </Package>
  );
}

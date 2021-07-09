import styled from "styled-components";

const Header = styled.h2`
  font-size: 2.441rem;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  margin-top: 1rem;
  text-align: center;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;

const Header2 = styled(Header)`
  color: ${({ theme }) => theme.primaryText};
`;

export function InformationBlock({ children, heading }) {
  return (
    <>
      <Header>{heading}</Header>
      <Paragraph>{children}</Paragraph>
    </>
  );
}

export function InformationBlock2({ children, heading }) {
  return (
    <>
      <Header2>{heading}</Header2>
      <Paragraph>{children}</Paragraph>
    </>
  );
}

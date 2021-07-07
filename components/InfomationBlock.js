import styled from "styled-components";

const Header = styled.h2`
  font-size: 2.441rem;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  margin-top: 1rem;
`;

export default function InformationBlock({ children, heading }) {
  return (
    <>
      <Header>{heading}</Header>
      <Paragraph>{children}</Paragraph>
    </>
  );
}

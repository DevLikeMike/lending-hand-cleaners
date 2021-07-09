import styled from "styled-components";

const Foot = styled.footer`
  text-align: center;
  padding: 1rem;
  color: ${({ theme }) => theme.lightShade};
  background-color: ${({ theme }) => theme.accentDark};
`;

export default function Footer() {
  return (
    <Foot>
      <h4>Lending Hand Cleaners copyright &copy; 2021</h4>
    </Foot>
  );
}

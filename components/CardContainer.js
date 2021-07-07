import styled from "styled-components";

const Cardcontainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 900px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export default function CardContainer({ children }) {
  return <Cardcontainer>{children}</Cardcontainer>;
}

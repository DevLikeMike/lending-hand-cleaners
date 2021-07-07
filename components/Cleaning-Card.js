import styled from "styled-components";
import { FaSnapchat, FaHome } from "react-icons/fa";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  padding: 1rem;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  flex: 1 3;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.primaryPurple};
  border-radius: 50%;
  height: 6rem;
  width: 6rem;
  color: #fff;
  font-size: 5rem;
`;

const CardBtn = styled.button`
  background-color: ${({ theme }) => theme.primaryPurple};
  color: #fff;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5rem;
  min-width: 8rem;
  font-size: 1rem;

  &:hover {
    opacity: 0.8;
  }
`;

export default function CleaningCard({ children, icon, heading }) {
  return (
    <Card>
      <Icon>{icon === "FaHome" && <FaHome />}</Icon>
      <h2 className='text-center'>{heading}</h2>
      {children}
      <CardBtn>Read More</CardBtn>
    </Card>
  );
}

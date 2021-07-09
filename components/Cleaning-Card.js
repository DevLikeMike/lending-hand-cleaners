import styled from "styled-components";
import { FaSnapchat, FaHome } from "react-icons/fa";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  flex: 1 3;
  color: ${({ theme }) => theme.primaryText};
  line-height: 1.5;
  background-color: #fff;
  border-radius: 5px;

  @media (min-width: 768px) {
    line-height: 1.6;
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.primaryPurple};
  border-radius: 50%;
  height: 6rem;
  width: 6rem;
  color: #eeffff;
  font-size: 5rem;
`;

const CardBtn = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.accentDark};
  padding: 1rem 2rem;
  border: 1px solid;
  border-color: ${({ theme }) => theme.primaryPurple};
  border-radius: 8px;
  min-width: 8rem;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
    background-color: ${({ theme }) => theme.primaryPurple};
    color: #fff;
    cursor: pointer;
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

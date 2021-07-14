import styled from "styled-components";
import { FcInvite, FcAssistant, FcApproval } from "react-icons/fc";

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

  h2 {
    font-size: 1.4rem;
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.primaryPurple};
  border-radius: 50%;
  height: 5rem;
  width: 5rem;
  color: #eeffff;
  font-size: 3rem;
`;

export default function OpCard({ children, icon, heading }) {
  return (
    <Card>
      <Icon>
        {icon === "FcInvite" ? (
          <FcInvite />
        ) : icon === "FcAssistant" ? (
          <FcAssistant />
        ) : (
          <FcApproval />
        )}
      </Icon>
      <h2 className='text-center'>{heading}</h2>
    </Card>
  );
}

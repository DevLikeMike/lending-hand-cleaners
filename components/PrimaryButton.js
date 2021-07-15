import styled from "styled-components";
import Link from "next/link";

const PrimButton = styled.a`
  width: 100%;
  margin: 1rem 0;
  border: 1px solid;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.primaryPurple};
  text-align: center;
  color: ${({ theme }) => theme.primaryText};
  padding: 0.5rem 2rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primaryPurple};
    color: #fff;
    cursor: pointer;
  }
`;

export default function PrimaryButton({ children, location }) {
  return (
    <Link href={location}>
      <PrimButton>{children}</PrimButton>
    </Link>
  );
}

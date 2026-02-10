import styled from "styled-components";

export const Container = styled.section`
  padding: 5rem 1.5rem;
`;

export const Content = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
`;

export const Grid = styled.div`
  display: grid;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled.div`
  background: rgba(20, 20, 20, 0.85);
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 1.8rem;
`;

export const Name = styled.h4`
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Text = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textLight};
`;

import styled from 'styled-components';

export const Container = styled.section`
  padding: 5rem 1.5rem;
  background: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 2.3rem;
  text-align: center;
  margin-bottom: 3rem;
`;

export const Grid = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.backgroundAlt};
  padding: 2.5rem 2rem;
  border-radius: ${({ theme }) => theme.radius.md};
  transition: 0.3s;

  &:hover {
    transform: translateY(-8px);
  }
`;

export const Icon = styled.div`
  font-size: 2.4rem;
  margin-bottom: 1.2rem;
`;

export const CardTitle = styled.h3`
  margin-bottom: 0.5rem;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.95rem;
`;

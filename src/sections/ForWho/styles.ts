import styled from 'styled-components';

export const Container = styled.section`
  padding: 4rem 1.5rem;
  background: ${({ theme }) => theme.colors.backgroundAlt};
`;

export const Content = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 2.2rem;
  text-align: center;
  margin-bottom: 3rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Card = styled.div`
  background: linear-gradient(
    135deg,
    rgba(30, 30, 30, 0.85),
    rgba(10, 10, 10, 0.85)
  );

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  border: 1px solid ${({ theme }) => theme.colors.primary};
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.6);

  padding: 2.2rem 1.8rem;
  border-radius: ${({ theme }) => theme.radius.lg};

  text-align: center;
  transition: all 0.35s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.8);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    box-shadow: 0 0 25px ${({ theme }) => theme.colors.primary};
    opacity: 0.15;
    pointer-events: none;
    }
`;

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.8rem;
`;


export const Icon = styled.div`
  font-size: 2.2rem;
  margin-bottom: 1rem;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.95rem;
  line-height: 1.5;
`;

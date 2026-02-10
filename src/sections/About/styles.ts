import styled from 'styled-components';

export const Container = styled.section`
  padding: 5rem 1.5rem;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.backgroundAlt},
    ${({ theme }) => theme.colors.background}
  );
`;

export const Content = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  gap: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    max-width: 820px;
    border-radius: ${({ theme }) => theme.radius.lg};
    box-shadow: 0 20px 40px rgba(0,0,0,0.25);
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Title = styled.h2`
  font-size: 2.2rem;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.6;
`;

export const InstagramButton = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.9rem 1.8rem;
  width: auto;
  text-align: center;
  max-width: 350px;

  background: ${({ theme }) => theme.colors.primary};
  color: #fff;

  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;

  border-radius: ${({ theme }) => theme.radius.md};
  transition: 0.3s;

  &:hover {
    transform: translateY(-3px);
    opacity: 0.9;
  }
`;
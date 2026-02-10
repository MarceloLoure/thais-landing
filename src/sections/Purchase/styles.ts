import styled from "styled-components";

export const Container = styled.section`
  padding: 5rem 1.5rem;
  background: radial-gradient(
    circle at top,
    rgba(0, 255, 180, 0.08),
    transparent 60%
  );
`;

export const Content = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 3rem;
  font-size: 1.05rem;
`;

export const Card = styled.div`
  max-width: 420px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  background: linear-gradient(
    135deg,
    rgba(25, 25, 25, 0.9),
    rgba(5, 5, 5, 0.9)
  );

  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow:
  0 10px 30px rgba(0,0,0,0.6),
  0 0 20px rgba(0, 255, 180, 0.15);
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

export const ProductTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;

export const Benefits = styled.ul`
  list-style: none;
  margin: 1.5rem 0;
  padding: 0;

  li {
    margin-bottom: 0.6rem;
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

export const OldPrice = styled.span`
  display: block;
  text-decoration: line-through;
  opacity: 0.6;
  margin-top: 1rem;
`;

export const Price = styled.div`
  font-size: 2.2rem;
  font-weight: 800;
  margin: 0.5rem 0 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Button = styled.a`
  display: block;
  width: 100%;
  padding: 1rem;

  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    #00c98b
  );

  color: #000;
  font-weight: 700;
  border-radius: ${({ theme }) => theme.radius.md};
  text-decoration: none;
  transition: 0.3s;

    &:hover {
        transform: translateY(-3px) scale(1.02);
        box-shadow: 0 15px 30px rgba(0, 255, 180, 0.4);
    }
`;

export const Note = styled.p`
  font-size: 0.75rem;
  opacity: 0.7;
  margin-top: 1rem;
`;

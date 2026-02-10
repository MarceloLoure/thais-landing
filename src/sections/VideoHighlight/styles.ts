import styled from "styled-components";

export const Container = styled.section`
  padding: 5rem 1.5rem;
  background: radial-gradient(
    circle at center,
    rgba(0, 255, 180, 0.08),
    transparent 60%
  );
`;

export const VideoContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2.3rem;
  margin-bottom: 1rem;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    font-size: 1.9rem;
  }
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 2.5rem;
`;

export const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;

  max-height: 400px;
  overflow: hidden;

  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.colors.primary};

  box-shadow:
    0 20px 40px rgba(0,0,0,0.7),
    0 0 30px rgba(0,255,180,0.2);

    video {
        width: 100%;
        height: 100%;
        max-height: 400px;

        object-fit: contain;
        background: #000;

        display: block;
    }
`;

export const CTA = styled.a`
  display: inline-block;
  margin-top: 2rem;
  padding: 0.9rem 2rem;

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
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(0,255,180,0.4);
  }
`;

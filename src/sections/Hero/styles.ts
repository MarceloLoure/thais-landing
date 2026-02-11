import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  min-height: 100vh;
  width: 100%;
  background-image: url("/thais-img-principal.png");
  background-size: cover;
  background-position: 70% top;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  padding: 0 6%;

  @media (max-width: 768px) {
    align-items: flex-end;
    padding: 0 1.5rem;
    background-position: 75% center;
  }

  /* @media (max-width: 768px) {
    align-items: flex-end;
    padding: 0 1.5rem;
    background-position: center;
  } */
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(0, 0, 0, 0.6) 45%,
    rgba(0, 0, 0, 0.2) 100%
  );
  z-index: 1;

  @media (max-width: 768px) {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0.9) 70%
    );
  }
`;

export const Content = styled.div`
  position: relative;
  text-align: center;
  z-index: 2;
  max-width: 640px;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 768px) {
    padding-bottom: 4rem;
  }
`;

export const Title = styled.h1`
  font-size: clamp(3.2rem, 6vw, 5rem);
  letter-spacing: -1px;
  font-weight: 800;
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.text};

  span {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    font-size: 2.6rem;
  }
`;

export const Subtitle = styled.p`
  margin-top: 1.5rem;
  font-size: clamp(1.1rem, 1.6vw, 1.4rem);
  max-width: 520px;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const CTA = styled.a`
  display: inline-block;
  margin-top: 2.5rem;
  padding: 1.1rem 3rem;

  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primaryDark} 0%,
    rgba(32, 242, 164, 0.85) 100%
  );

  color: #000;
  font-weight: 800;
  border-radius: 999px;
  text-decoration: none;
  font-size: 1.05rem;

  box-shadow:
    0 10px 30px rgba(32, 242, 164, 0.35),
    0 0 40px rgba(32, 242, 164, 0.2);

  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-3px) scale(1.03);
    box-shadow:
      0 18px 45px rgba(32, 242, 164, 0.55),
      0 0 60px rgba(32, 242, 164, 0.35);
  }
`;


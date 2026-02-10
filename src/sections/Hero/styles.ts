import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  min-height: 100vh;
  width: 100%;
  background-image: url("/thais-img-principal.png");
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  padding: 0 6%;

  @media (max-width: 768px) {
    align-items: flex-end;
    padding: 0 1.5rem;
    background-position: center;
  }
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
  font-size: clamp(2.8rem, 5vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.text};

  span {
    color: ${({ theme }) => theme.colors.primary};
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
  padding: 1rem 2.5rem;

  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.primaryDark}
  );

  color: #000;
  font-weight: 700;
  border-radius: 999px;
  text-decoration: none;
  font-size: 1rem;

  box-shadow: 0 0 25px rgba(32, 242, 164, 0.4);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 40px rgba(32, 242, 164, 0.6);
  }
`;

import styled from "styled-components";

export const Container = styled.section`
  padding: 4rem 1.5rem;
  background: ${({ theme }) => theme.colors.backgroundAlt};
`;

export const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
`;

export const Title = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1rem;
  line-height: 1.6;
`;

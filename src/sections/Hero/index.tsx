import {
  Container,
  Overlay,
  Content,
  Title,
  Subtitle,
  CTA
} from "./styles";

export function Hero() {
  return (
    <Container>
      <Overlay />

      <Content>
        <Title>
          Transforme seu corpo <br />
          <span>em 21 dias</span>
        </Title>

        <Subtitle>
          Treinos femininos, alimentação simples e um método testado
          por mais de 1.000 mulheres.
        </Subtitle>

        <CTA href="#checkout">
          Entrar agora no FIT WOMAN
        </CTA>
      </Content>
    </Container>
  );
}

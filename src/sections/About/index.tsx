import {
  Container,
  Content,
  ImageWrapper,
  TextWrapper,
  Title,
  Text,
  InstagramButton,
} from "./styles";

export function About() {
  return (
    <Container>
      <Content>
        <ImageWrapper>
          <img
            src="/thais-img-about.png"
            alt="Thaís Padilha - Personal Trainer"
          />
        </ImageWrapper>

        <TextWrapper>
          <Title>Thaís Padilha</Title>

          <Text>
            Sou a Thais Padilha, personal trainer apaixonada por ajudar mulheres a conquistarem mais saúde, confiança e resultados reais.
          </Text>

          <Text>
            Criei o FIT WOMAN porque vi muitas mulheres desistindo por falta de um guia simples e direto, que mostrasse o caminho certo sem dietas malucas ou treinos impossíveis.
          </Text>

          <Text>
            Aqui você encontra treinos organizados por níveis e um guia de nutrição prático, para evoluir no seu ritmo e transformar sua rotina de forma leve e duradoura. Se tantas mulheres já conseguiram com esse método, você também pode!
          </Text>

          <InstagramButton
            href="https://www.instagram.com/thaispadilhatrainer/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Conheça meu Instagram
          </InstagramButton>
        </TextWrapper>
      </Content>
    </Container>
  );
}

import { Container, Content, Title, Grid, Card, Text, Name } from "./styles";

export function Testimonials() {
  return (
    <Container>
      <Content>
        <Title>O que as alunas dizem</Title>

        <Grid>
          <Card>
            <Text>
              “Consegui manter a rotina pela primeira vez. Em 21 dias já vi
              diferença no corpo e na disposição.”
            </Text>
            <Name>— Juliana</Name>
          </Card>

          <Card>
            <Text>
              “Treinos rápidos, alimentação simples e resultados reais. Nunca
              pensei que conseguiria.”
            </Text>
            <Name>— Camila</Name>
          </Card>

          <Card>
            <Text>
              “Método fácil de seguir, sem loucura. Me senti acompanhada o
              tempo todo.”
            </Text>
            <Name>— Renata</Name>
          </Card>
        </Grid>
      </Content>
    </Container>
  );
}

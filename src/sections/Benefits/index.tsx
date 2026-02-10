import { Container, Content, Title, Grid, Card, Icon, CardTitle, Text } from './styles';

export function Benefits() {
  return (
    <Container>
      <Content>
        <Title>O que você vai receber no Desafio 21 Dias</Title>

        <Grid>
          <Card>
            <Icon>🏋️‍♀️</Icon>
            <CardTitle>Treinos Guiados</CardTitle>
            <Text>
              Treinos simples e eficientes, pensados para quem não tem muito tempo,
              mas quer resultado de verdade.
            </Text>
          </Card>

          <Card>
            <Icon>🥗</Icon>
            <CardTitle>Alimentação Real</CardTitle>
            <Text>
              Orientações práticas de alimentação, sem dietas extremas ou restrições
              impossíveis de manter.
            </Text>
          </Card>

          <Card>
            <Icon>📆</Icon>
            <CardTitle>Rotina Organizada</CardTitle>
            <Text>
              Um plano claro para os 21 dias, para você saber exatamente o que fazer
              e não desistir no meio do caminho.
            </Text>
          </Card>

          <Card>
            <Icon>💬</Icon>
            <CardTitle>Motivação Constante</CardTitle>
            <Text>
              Acompanhamento e incentivo para manter o foco, mesmo nos dias difíceis.
            </Text>
          </Card>

          <Card>
            <Icon>📈</Icon>
            <CardTitle>Evolução Visível</CardTitle>
            <Text>
              Resultados que você sente no corpo, na disposição e na autoestima já
              nas primeiras semanas.
            </Text>
          </Card>

          <Card>
            <Icon>💚</Icon>
            <CardTitle>Método Testado</CardTitle>
            <Text>
              Um método aplicado por mulheres reais, focado em saúde, constância
              e bem-estar.
            </Text>
          </Card>
        </Grid>
      </Content>
    </Container>
  );
}

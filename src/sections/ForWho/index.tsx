import { Container, Content, Title, Grid, Card, Icon, Text, CardTitle } from './styles';

export function ForWho() {
  return (
    <Container>
      <Content>
        <Title>Esse desafio é para você que:</Title>

        <Grid>
            <Card>
                <CardTitle>Resultados em 21 dias</CardTitle>
                <Text>
                    Um método testado que já transformou mais de 1.000 mulheres.
                </Text>
            </Card>

          <Card>
            <CardTitle>Treinos rápidos e eficazes</CardTitle>
            <Text>Resultados mesmo com pouco tempo por dia, sem precisar viver na academia.</Text>
          </Card>

          <Card>
            <CardTitle>Alimentação descomplicada</CardTitle>
            <Text>Receitas fáceis, gostosas e adaptáveis à sua rotina corrida.</Text>
          </Card>   


          <Card>
            <CardTitle>Suplementação sem segredos</CardTitle>
            <Text>Saiba quais realmente funcionam e como usar com segurança.</Text>
          </Card>
        </Grid>
      </Content>
    </Container>
  );
}

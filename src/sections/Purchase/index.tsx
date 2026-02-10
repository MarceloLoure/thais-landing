import {
  Container,
  Content,
  Title,
  Subtitle,
  Card,
  ProductTitle,
  Benefits,
  OldPrice,
  Price,
  Button,
  Note,
} from "./styles";
import { motion } from "framer-motion";
import { fadeUp } from "../../animations/fadeUp";

export function Purchase() {
  return (
    <Container>
      <Content
        as={motion.div}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Title>
          O corpo que você deseja <span>só depende da decisão</span> que você
          toma hoje
        </Title>

        <Subtitle>
          Garanta sua vaga agora e comece o FIT WOMAN ainda hoje
        </Subtitle>

        <Card>
          <ProductTitle>
            O guia feminino que vai transformar seu corpo em 21 dias
          </ProductTitle>

          <Benefits>
            <li>✔️ Guia essencial de nutrição simples e prática</li>
            <li>✔️ Treinos para iniciantes, intermediárias e avançadas</li>
            <li>✔️ Pode ser feito em casa ou na academia</li>
            <li>✔️ Evolução progressiva do básico ao avançado</li>
          </Benefits>

          <OldPrice>De R$ 249,90</OldPrice>
          <Price>R$ 29,90</Price>

          <Button
            href="https://sun.eduzz.com/7WXQJX69A"
            target="_blank"
            rel="noopener noreferrer"
          >
            Entrar Agora
          </Button>

            <Note>
                Compra segura • Acesso imediato • Garantia de 7 dias
            </Note>
        </Card>
      </Content>
    </Container>
  );
}

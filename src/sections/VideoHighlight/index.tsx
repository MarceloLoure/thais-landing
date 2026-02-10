import {
  Container,
  Content,
  Title,
  Subtitle,
  VideoWrapper,
  CTA,
  VideoContainer,
} from "./styles";

import { motion } from "framer-motion";
import { fadeUp } from "../../animations/fadeUp";

export function VideoHighlight() {
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
          Conheça o <span>FIT WOMAN</span> por dentro
        </Title>

        <Subtitle>
          Veja como o método funciona e por que ele já transformou tantas
          mulheres
        </Subtitle>

        <VideoContainer>
            <VideoWrapper>
                <video
                    src="https://thaispadilha.com.br/wp-content/uploads/2026/02/Thais-Padilha_Fit-Woman-2.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                />
            </VideoWrapper>
        </VideoContainer>

        <CTA href="#purchase">
          Quero começar agora
        </CTA>
      </Content>
    </Container>
  );
}

import { useRef, useState } from "react";
import {
  Section,
  VideoWrapper,
  StyledVideo,
  Overlay,
  SoundButton,
} from "./styles";

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  function toggleSound() {
    if (!videoRef.current) return;

    videoRef.current.muted = !muted;
    videoRef.current.play();
    setMuted(!muted);
  }

  return (
    <Section>
      <VideoWrapper>
        <StyledVideo
          ref={videoRef}
          src="https://thaispadilha.com.br/wp-content/uploads/2026/02/Thais-Padilha_Fit-Woman-2.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />

        <Overlay />

        <SoundButton onClick={toggleSound}>
          {muted ? "🔊 Ativar som" : "🔇 Silenciar"}
        </SoundButton>
      </VideoWrapper>
    </Section>
  );
}

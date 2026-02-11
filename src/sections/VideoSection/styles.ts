import styled from "styled-components";

export const Section = styled.section`
  padding: 4rem 1.5rem;
  display: flex;
  justify-content: center;
  background: #1e1e1e;
`;

export const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  max-height: 400px;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
`;

export const StyledVideo = styled.video`
    position: relative;
  width: 100%;
  max-width: 100%;

  max-height: 400px;
  overflow: hidden;

    video {
        width: 100%;
        height: 100%;
        max-height: 400px;

        object-fit: contain;
        background: #000;

        display: block;
    }
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.1)
  );
  pointer-events: none;
`;

export const SoundButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;

  padding: 0.7rem 1.2rem;
  border-radius: 50px;
  border: none;

  background: rgba(255, 255, 255, 0.9);
  color: #111;
  font-weight: 600;
  font-size: 0.9rem;

  cursor: pointer;
  transition: all 0.3s ease;

  backdrop-filter: blur(6px);

  &:hover {
    transform: translateY(-2px);
    background: #ffffff;
  }
`;

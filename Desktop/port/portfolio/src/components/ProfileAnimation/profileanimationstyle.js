
import styled, { keyframes } from "styled-components";

/* ----------------------------------------------------
   Small animations
   ---------------------------------------------------- */
export const glow = keyframes`
  0% {
    box-shadow: 0 0 20px #8e2de2, 0 0 40px #4a00e0;
    border-color: #8e2de2;
  }
  50% {
    box-shadow: 0 0 40px #4a00e0, 0 0 80px #8e2de2;
    border-color: #4a00e0;
  }
  100% {
    box-shadow: 0 0 20px #8e2de2, 0 0 40px #4a00e0;
    border-color: #8e2de2;
  }
`;

export const rotate = keyframes`
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
`;

/* ----------------------------------------------------
   Div — this is the export your HeroBgAnimation was importing.
   It holds the SVG background and positions it on the right.
   ---------------------------------------------------- */
export const Div = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 50%;                /* occupies right half (adjust if needed) */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: -1;
  pointer-events: none;

  .BgAnimation__svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

/* ----------------------------------------------------
   Hero / Profile layout components (used by ProfileAnimation / Hero)
   ---------------------------------------------------- */
export const HeroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 120px;
  min-height: 100vh;
  position: relative;
`;

/* left area where your text sits (keeps name/desc) */
export const HeroLeftContainer = styled.div`
  flex: 1;
  color: #fff;
  z-index: 2;
`;

/* right area for profile image */
export const HeroRightContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

/* circular image wrapper (glow) */
export const ProfileWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  border: 6px solid #8e2de2;
  animation: ${glow} 3s infinite ease-in-out;
  z-index: 2;
`;

/* the img itself */
export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;
const rotate1 = keyframes`
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
`;

/* rotating dashed circle outside the image */

export const RotatingCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 380px;   /* slightly larger than image */
  height: 380px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: ${rotate1} 10s linear infinite;
  pointer-events: none;
  z-index: 1;

  /* dashed ring with gap effect */
  background: conic-gradient(
    #00e5ff 0deg 20deg,     /* dash */
    transparent 20deg 40deg /* gap */
  );
  -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 6px), #000 0);
  mask: radial-gradient(farthest-side, transparent calc(100% - 6px), #000 0);
`;


/* small helpers if you need them in other files */
export const ImgWrapper = ProfileWrapper;
export const Img = ProfileImage;

// import React from "react";
// import styled, { keyframes } from "styled-components";
// import { Bio } from "../../Data/Data";
// import { Bio1 } from "../../Data/Data";
// import Typewriter from "typewriter-effect";
// import Profileimage from "../../images/Profileimage.jpg";
// import Profileanimation from "../ProfileAnimation/index";
// import { Tilt } from "react-tilt";
// import { motion } from "framer-motion";
// import {
//   headContainerAnimation,
//   headContentAnimation,
//   headTextAnimation,
// } from "../../utils/motion";
// import StarCanvas from "../canvas/Stars";

// const rotate = keyframes`
//   0% {
//     stroke-dashoffset: 0;
//   }
//   100% {
//     stroke-dashoffset: -100;
//   }
// `;

// const Title = styled.div`
//   font-weight: 700;
//   font-size: 50px;
//   color: ${({ theme }) => theme.text_primary};
//   line-height: 68px;

//   @media (max-width: 960px) {
//     text-align: center;
//     font-size: 40px;
//     line-height: 48px;
//     margin-bottom: 8px;
//   }
// `;

// const TextLoop = styled.div`
//   font-weight: 600;
//   font-size: 32px;
//   display: flex;
//   gap: 12px;
//   color: ${({ theme }) => theme.text_primary};
//   line-height: 68px;

//   @media (max-width: 960px) {
//     text-align: center;
//     font-size: 22px;
//     line-height: 48px;
//     margin-bottom: 16px;
//   }
// `;

// const Span = styled.div`
//   cursor: pointer;
//   color: ${({ theme }) => theme.primary};
// `;

// const SubTitle = styled.div`
//   font-size: 20px;
//   line-height: 32px;
//   margin-bottom: 42px;
//   color: ${({ theme }) => theme.text_primary + 95};

//   @media (max-width: 960px) {
//     text-align: center;
//     font-size: 16px;
//     line-height: 32px;
//   }
// `;

// const ButtonWrapper = styled.div`
//   display: flex;
//   gap: 16px;
//   flex-wrap: nowrap;
//   justify-content: flex-start;

//   @media (max-width: 640px) {
//     flex-wrap: wrap;
//     justify-content: center;
//   }
// `;

// const ResumeButton = styled.a`
//   -webkit-appearance: button;
//   -moz-appearance: button;
//   appearance: button;
//   text-decoration: none;

//   width: 95%;
//   max-width: 300px;
//   text-align: center;
//   padding: 16px 0;

//   background: linear-gradient(
//     225deg,
//     hsla(271, 100%, 50%, 1) 0%,
//     hsla(294, 100%, 50%, 1) 100%
//   );
//   box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
//   border-radius: 50px;
//   font-weight: 600;
//   font-size: 20px;
//   color: white;
//   transition: all 0.4s ease-in-out;

//   &:hover {
//     transform: scale(1.05);
//     filter: brightness(1.2);
//     box-shadow: 0px 0px 30px #a855f7, 0px 0px 50px #f472b6;
//   }

//   @media (max-width: 640px) {
//     padding: 12px 0;
//     font-size: 18px;
//   }
// `;

// const Img = styled.img`
//   border-radius: 50%;
//   width: 100%;
//   height: 100%;
//   max-width: 600px;
//   max-height: 500px;
//   border: 2px solid ${({ theme }) => theme.primary};

//   @media (max-width: 640px) {
//     max-width: 280px;
//     max-height: 280px;
//   }
// `;

// const HeroBg = styled.div`
//   position: absolute;
//   display: flex;
//   justify-content: end;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   max-width: 1360px;
//   overflow: hidden;
//   padding: 0 30px;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);

//   @media (max-width: 960px) {
//     justify-content: center;
//     padding: 0 0px;
//   }
// `;

// const RotatingCircle = styled.svg`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: 420px; // Adjust size as necessary
//   height: 420px; // Adjust size as necessary
//   overflow: visible;
//   circle {
//     fill: none;
//     stroke: #13ADC7;
//     stroke-width: 10;
//     stroke-dasharray: 100 50; // For dashed effect
//     animation: ${rotate} 5s linear infinite;
//   }
// `;

// const HeroContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   position: relative;
//   padding: 80px 30px;
//   z-index: 1;
//   clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
// `;

// const HeroInnerContainer = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
//   max-width: 1100px;
//   @media (max-width: 960px) {
//     flex-direction: column;
//   }
// `;

// const HeroLeftContainer = styled.div`
//   width: 100%;
//   order: 1;
//   @media (max-width: 960px) {
//     order: 2;
//     margin-bottom: 30px;
//     display: flex;
//     gap: 6px;
//     flex-direction: column;
//     align-items: center;
//   }
// `;

// const HeroRightContainer = styled.div`
//   width: 100%;
//   order: 2;
//   display: flex;
//   justify-content: end;
//   position: relative; 
//   @media (max-width: 960px) {
//     order: 1;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     margin-bottom: 80px;
//   }

//   @media (max-width: 640px) {
//     margin-bottom: 30px;
//   }
// `;

// const Hero = () => {
//   return (
//     <div id="About">
//       <HeroContainer>
//         <HeroBg>
//           <StarCanvas />
//           <Profileanimation />
//         </HeroBg>

//         <motion.div {...headContainerAnimation}>
//           <HeroInnerContainer>
//             <HeroLeftContainer>
//               <motion.div {...headTextAnimation}>
//                 <Title>
//                   Hi, I am <br /> {Bio.name}
//                 </Title>
//                 <TextLoop>
//                   I am a
//                   <Span>
//                     <Typewriter
//                       options={{
//                         strings: Bio.roles,
//                         autoStart: true,
//                         loop: true,
//                       }}
//                     />
//                   </Span>
//                 </TextLoop>
//               </motion.div>

//               <motion.div {...headContentAnimation}>
//                 <SubTitle>{Bio.description}</SubTitle>
//               </motion.div>
//               <ButtonWrapper>
//                 <ResumeButton href={Bio1.Resume}>
//                   View Resume
//                 </ResumeButton>
//                 <ResumeButton href={Bio.resume}>
//                   Download Resume
//                 </ResumeButton>
//               </ButtonWrapper>
//             </HeroLeftContainer>
//             <HeroRightContainer>
//               <motion.div {...Profileanimation}>
//                 <Tilt>
//                   <Img src={Profileimage} alt="User Image" />
//                   <RotatingCircle xmlns="http://www.w3.org/2000/svg">
//                     <circle cx="200" cy="200" r="300" />
//                   </RotatingCircle>
//                 </Tilt>
//               </motion.div>
//             </HeroRightContainer>
//           </HeroInnerContainer>
//         </motion.div>
//       </HeroContainer>
//     </div>
//   );
// };

// export default Hero;
import React from "react";
import styled, { keyframes } from "styled-components";
import { Bio, Bio1 } from "../../Data/Data"; 
import Typewriter from "typewriter-effect";
import Profileimage from "../../images/Profileimage.jpg";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../../utils/motion";
import StarCanvas from "../canvas/Stars";
import Profileanimation from "../ProfileAnimation/index";

const rotate = keyframes`
  0% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: -100;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
    font-size: 16px;
    line-height: 32px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: nowrap;
  justify-content: flex-start;

  @media (max-width: 640px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;

  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;

  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  border-radius: 50px;
  font-weight: 600;
  font-size: 20px;
  color: white;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(1.05);
    filter: brightness(1.2);
    box-shadow: 0px 0px 30px #a855f7, 0px 0px 50px #f472b6;
  }

  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  }
`;

const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 500px;
  border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;
const RotatingCircle = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px; /* slightly larger */
  height: 500px; /* slightly larger */
  overflow: visible;

  circle {
    fill: none;
    stroke: #13adc7;
    stroke-width: 10;
    stroke-dasharray: 100 50; /* For dashed effect */
    animation: ${rotate} 5s linear infinite;
  }
`;


const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: center;
  }
`;

const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  position: relative; 
  @media (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

const Hero = () => {
  return (
    <div id="About">
      <HeroContainer>
        <HeroBg>
          <StarCanvas />
          <Profileanimation />
        </HeroBg>

        <motion.div {...headContainerAnimation}>
          <HeroInnerContainer>
            <HeroLeftContainer>
              <motion.div {...headTextAnimation}>
                <Title>
                  Hi, I am <br /> {Bio.name}
                </Title>
                <TextLoop>
                  I am a
                  <Span>
                    <Typewriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </Span>
                </TextLoop>
              </motion.div>

              <motion.div {...headContentAnimation}>
                <SubTitle>{Bio.description}</SubTitle>
              </motion.div>
              <ButtonWrapper>
                <ResumeButton href={Bio1.Resume}>
                  View Resume
                </ResumeButton>
                <ResumeButton href={Bio.resume}>
                  Download Resume
                </ResumeButton>
              </ButtonWrapper>
            </HeroLeftContainer>
            <HeroRightContainer>
              <motion.div {...headContentAnimation}>
                <Tilt>
                  <Img src={Profileimage} alt="User Image" />
                  {/* <RotatingCircle xmlns="http://www.w3.org/2000/svg">
                    <circle cx="200" cy="200" r="180" />
                  </RotatingCircle> */}<RotatingCircle xmlns="http://www.w3.org/2000/svg">
  <circle cx="250" cy="260" r="290" /> {/* bigger radius for more gap */}
</RotatingCircle>

                </Tilt>
              </motion.div>
            </HeroRightContainer>
          </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
    </div>
  );
};

export default Hero;

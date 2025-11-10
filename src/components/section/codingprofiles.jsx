import React from "react";
import styled, { keyframes } from "styled-components";

// Floating animation (vertical float + slight rotation)
const float = keyframes`
  0%   { transform: translate(0, 0) rotate(0deg); }
  50%  { transform: translate(0, -16px) rotate(2deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
`;

// Glow pulse
const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.2); opacity: 0.4; }
  100% { transform: scale(1); opacity: 0.7; }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 6rem 2rem;
  background: radial-gradient(1200px 600px at 10% 10%, rgba(139,92,246,0.12), transparent),
              linear-gradient(180deg, #070617 0%, #0b0920 100%);
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 3.2rem;
  margin: 0 0 0.6rem 0;
  text-align: center;
  color: #fff;
`;

const Desc = styled.p`
  font-size: 1.2rem;
  text-align: center;
  max-width: 65ch;
  margin-bottom: 3rem;
  color: #aaa;
`;

const Stage = styled.div`
  position: relative;
  width: 100%;
  max-width: 1100px;
  height: 550px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftProfiles = styled.div`
  position: relative;
  flex: 1;
  height: 100%;
`;

const RightAvatar = styled.div`
  flex: 0 0 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AvatarWrapper = styled.div`
  position: relative;
  z-index: 20;
  pointer-events: none;
`;

const GlowRing = styled.div`
  position: absolute;
  width: 280px;
  height: 280px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(139,92,246,0.18), transparent 60%);
  z-index: 0;
  animation: ${pulse} 3s infinite ease-in-out;
`;

const AvatarBox = styled.div`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0,0,0,0.65);
  background: rgba(255,255,255,0.02);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AvatarImg = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(255,255,255,0.9);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  pointer-events: none;
  user-select: none;
`;

const Logo = styled.a`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px;
  border-radius: 18px;
  background: rgba(255,255,255,0.05);
  box-shadow: 0 12px 35px rgba(2,6,23,0.6), inset 0 1px 0 rgba(255,255,255,0.03);
  backdrop-filter: blur(6px);
  cursor: pointer;

  /* Floating animation */
  animation: ${float} ${({ duration }) => duration || "6s"} infinite ease-in-out;

  &:hover {
    transform: translateY(-10px) scale(1.06);
    box-shadow: 0 22px 55px rgba(0,0,0,0.75);
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    pointer-events: none;
    user-select: none;
  }
`;

const profiles = [
  { left: "10%", top: "15%", title: "LeetCode", img: "https://cdn.prod.website-files.com/66bc0319fce51f7e5568a809/66cccfa7da1895b49c7339f0_63da69688b48024c910050a1_Leetcode%2520main.webp", url: "https://leetcode.com/u/hema7228/", duration: "4.8s" },
  { left: "25%", top: "70%", title: "HackerRank", img: "https://cdn.nwe.io/files/x/62/37/c30122710aaaf27ba163584f6194.png", url: "https://www.hackerrank.com/profile/suryateja7228", duration: "4.2s" },
  { left: "50%", top: "5%", title: "Codeforces", img: "https://store-images.s-microsoft.com/image/apps.48094.14504742535903781.aedbca21-113a-48f4-b001-4204e73b22fc.503f883f-8339-4dc5-8609-81713a59281f", url: "https://codeforces.com/profile/surya7228", size: "140px", duration: "5.6s" },
  { left: "78%", top: "25%", title: "TakeUForward", img: "https://i.ytimg.com/vi/aRwYTDwGWLE/sddefault.jpg", url: "https://takeuforward.org/plus/profile/Surya7228", duration: "5.3s" },
  { left: "80%", top: "65%", title: "CodeChef", img: "https://cdn.dribbble.com/userupload/20103349/file/original-a0411030f26482dcee9298419bf8d1c6.png?resize=752x&vertical=center", url: "https://www.codechef.com/users/shoal_trick_69", duration: "4.6s" },
  { left: "45%", top: "82%", title: "Coding Ninjas", img: "https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/coding_ninjas_logo/original.png?1700174580", url: "https://www.naukri.com/code360/profile/e08e3387-5312-47a5-8364-e3d766c0cfa4", duration: "3.8s" },
  { left: "45%", top: "82%", title: "Coding Ninjas", img:"  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgsU4IWmumHDr1AnjKtMHSL5wkl9UUwU_zWQ&s", url: "  https://www.geeksforgeeks.org/user/surya7228/", duration: "3.8s" },
];


const CodingProfilesFloating = () => {
  return (
    <Container id="CodingProfiles">
      <Title>Coding Profiles</Title>
      <Desc>My profiles on coding platforms and achievements in competitive programming.</Desc>

      <Stage>
        {/* Left Floating Logos */}
        <LeftProfiles>
          {profiles.map((logo, i) => (
            <Logo
              key={i}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              duration={logo.duration}
              style={{
                left: logo.left,
                top: logo.top,
                width: logo.size || "120px",
                height: logo.size || "120px",
              }}
              title={logo.title}
            >
              <img src={logo.img} alt={logo.title} />
            </Logo>
          ))}
        </LeftProfiles>

        {/* Right static avatar */}
        <RightAvatar>
          <AvatarWrapper>
            <GlowRing />
            <AvatarBox>
              <AvatarImg
                src="https://img.pikbest.com/origin/09/17/24/532pIkbEsTQ4K.png!w700wp"
                alt="coding avatar"
              />
            </AvatarBox>
          </AvatarWrapper>
        </RightAvatar>
      </Stage>
    </Container>
  );
};
export default CodingProfilesFloating;

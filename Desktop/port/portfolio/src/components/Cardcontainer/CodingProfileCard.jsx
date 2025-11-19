// import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styled, { keyframes } from "styled-components";

const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
`;
const Image = styled.img`
  height: 50px;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;
const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Username = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + "99"};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
const Platform = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + "99"};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const DateOrRank = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + "80"};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
  &:hover {
    transform: scale(1.05);
    filter: brightness(1.2);
    box-shadow: 0px 0px 30px #a855f7, 0px 0px 50px #f472b6;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + "99"};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Achievements = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Achievement = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text_primary + "99"};
  background: rgba(255, 255, 255, 0.05);
  padding: 4px 8px;
  border-radius: 6px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  border-radius: 12px;
  padding: 16px;
  transition: 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
    filter: brightness(1.2);
    box-shadow: 0px 0px 30px #a855f7, 0px 0px 50px #f472b6;
  }
`;

// ---------------- ROTATING CIRCLE ANIMATION ----------------
const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const CircleWrapper = styled.div`
  position: relative;
  width: 160px;
  height: 160px;
  margin: 0 auto 16px;
`;

const RotatingCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  animation: ${rotate} 10s linear infinite;
  transform: translate(-50%, -50%);
`;

const PlatformIcon = styled.img`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

// ---------------- CARD COMPONENT ----------------
const CodingProfileCard = ({ profile }) => {
  const radius = 60; // radius for orbit
  const angleStep = (2 * Math.PI) / profile?.platforms?.length;

  return (
    <VerticalTimelineElement
      icon={<img width="100%" height="100%" alt={profile?.platform} style={{ borderRadius: "50%", objectFit: "cover" }} src={profile?.img} />}
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "#1d1836",
        color: "#fff",
        boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
        backgroundColor: "rgba(17, 25, 40, 0.83)",
        border: "1px solid rgba(255, 255, 255, 0.125)",
        borderRadius: "6px",
      }}
      contentArrowStyle={{ borderRight: "7px solid  rgba(255, 255, 255, 0.3)" }}
      date={profile?.date || ""}
    >
      <CardWrapper>
        {/* Rotating Platforms */}
        {profile?.platforms?.length > 0 && (
          <CircleWrapper>
            <RotatingCircle>
              {profile.platforms.map((p, i) => {
                const angle = i * angleStep;
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);
                return (
                  <PlatformIcon
                    key={i}
                    src={p.img}
                    alt={p.name}
                    style={{
                      top: `calc(50% + ${y}px - 20px)`,
                      left: `calc(50% + ${x}px - 20px)`,
                    }}
                  />
                );
              })}
            </RotatingCircle>
          </CircleWrapper>
        )}

        <Top>
          <Image src={profile?.img} />
          <Body>
            <Username>{profile?.username}</Username>
            <Platform>{profile?.platform}</Platform>
            {profile?.rank && <DateOrRank>Rank: {profile.rank}</DateOrRank>}
          </Body>
        </Top>
        <Description>{profile?.desc}</Description>
        {profile?.achievements && (
          <Achievements>
            {profile.achievements.map((ach, index) => (
              <Achievement key={index}>• {ach}</Achievement>
            ))}
          </Achievements>
        )}
      </CardWrapper>
    </VerticalTimelineElement>
  );
};

export default CodingProfileCard;

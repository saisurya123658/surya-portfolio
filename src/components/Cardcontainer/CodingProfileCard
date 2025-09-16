import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styled from "styled-components";

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

const CodingProfileCard = ({ profile }) => {
  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={profile?.platform}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={profile?.img}
        />
      }
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
      contentArrowStyle={{
        borderRight: "7px solid  rgba(255, 255, 255, 0.3)",
      }}
      date={profile?.date || ""}
    >
      <CardWrapper>
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


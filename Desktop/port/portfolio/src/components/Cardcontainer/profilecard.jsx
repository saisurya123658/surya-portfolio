import React from "react";
import styled from "styled-components";

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

const Top = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;

  @media only screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

const Role = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + "cc"};

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Company = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + "cc"};

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + "80"};

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + "cc"};
  margin-top: 8px;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 6px;
`;

const Skill = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + "cc"};

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const ProfileCard = ({ profile }) => {
  return (
    <CardWrapper>
      <Top>
        <Image src={profile.img} alt={profile.name} />
        <Body>
          <Role>{profile.name}</Role>
          <Company>{profile.platform}</Company>
          {profile.date && <Date>{profile.date}</Date>}
        </Body>
      </Top>

      <Description>
        {profile.desc && <span>{profile.desc}</span>}
        {profile.skills && profile.skills.length > 0 && (
          <Skills>
            {profile.skills.map((skill, index) => (
              <Skill key={index}>• {skill}</Skill>
            ))}
          </Skills>
        )}
      </Description>
    </CardWrapper>
  );
};

export default ProfileCard;

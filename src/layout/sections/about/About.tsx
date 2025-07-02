import React, { FC } from 'react'
import * as S from './About.styled'
import { SectionTitle } from '../../../components/SectionTitle'
import { Container } from '../../../components/Container'
import { FlexedWrapper } from '../../../components/FlexWrapper'

export const About: FC = () => {
  return (
    <S.About id="about">
      <Container>
        <FlexedWrapper direction="column" justify="center" gap="20px">
          <SectionTitle>About me</SectionTitle>
          <S.Paragraph>
            I'm a passionate frontend developer based in Linz, Austria, with 2 years of hands-on experience. My expertise lies in HTML, CSS, JavaScript, React, and TypeScript, and I thrive on bringing designs to life while ensuring a seamless user experience.
          </S.Paragraph>
          <S.Paragraph>
            I enjoy every aspect of frontend development and am always eager to expand my skill set. Currently, I’m learning Node.js to deepen my backend knowledge with the goal of becoming a full-stack developer.
          </S.Paragraph>
          <S.Paragraph>
            Beyond coding, I love solving algorithmic challenges on Codewars and Leetcode, which sharpens my problem-solving skills. I also have a passion for languages: I practice my English through articles and YouTube videos on frontend development, and work on improving my German.
          </S.Paragraph>
          <S.Paragraph>
            Beyond technical skills, I value effective teamwork, open communication, and a collaborative mindset. I’m organized, detail-oriented, and capable of managing multiple tasks efficiently. My flexibility and adaptability help me learn quickly and handle challenges effectively.
          </S.Paragraph>
          <S.Paragraph>
            I’m always open to new challenges and opportunities that push me to grow both professionally and personally.
          </S.Paragraph>
          <S.Paragraph>Let’s build something great together! &#128522;</S.Paragraph>
        </FlexedWrapper>
      </Container>
    </S.About>
  );
}

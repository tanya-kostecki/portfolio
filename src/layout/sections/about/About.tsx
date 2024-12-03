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
            I enjoy every aspect of frontend development and am always eager to expand my skill set. Currently, I’m diving into Angular and planning to explore React Native to broaden my expertise. My ultimate goal is to transition into a full-stack developer role.
          </S.Paragraph>
          <S.Paragraph>
            Beyond coding, I love solving algorithmic challenges on Codewars, which sharpens my problem-solving skills. I also have a passion for languages: I practice my English through articles and YouTube videos on frontend development, and work on improving my German.
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

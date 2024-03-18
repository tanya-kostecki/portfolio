import React, { FC } from 'react'
import * as S from './Main.styled'
import { FlexedWrapper } from '../../../components/FlexWrapper'
import photo from '../../../assets/images/photo.webp'
import { StyledButton } from "../../../components/Button";
import { Container } from '../../../components/Container'
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";

export const Main: FC = () => {
  return (
    <S.Main id='home'>
      <Container>
        <FlexedWrapper
          align="center"
          justify="space-around"
          wrap="wrap-reverse"
        >
          <S.GreetingsBlock>
            <S.Greetings>Hi &#128075;</S.Greetings>
            <S.Greetings>My Name is</S.Greetings>
            <S.Name as="h2">TATIANA KOSTECKI</S.Name>
            <S.Greetings as="h1">
              <p>I am a Web Developer</p>
              <Typewriter
                options={{
                  strings: ["I am a Web Developer", "I am a Frontend Developer"],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
            </S.Greetings>
            <StyledButton>Contact me</StyledButton>
          </S.GreetingsBlock>
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.9}
            glareColor="lightblue"
            glarePosition="all"
            glareBorderRadius="20px"
          >
            <S.PhotoWrapper>
              <S.Photo src={photo} alt="image" />
            </S.PhotoWrapper>
          </Tilt>
        </FlexedWrapper>
      </Container>
    </S.Main>
  );
}
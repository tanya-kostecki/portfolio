import React, { FC } from 'react'
import * as S from './Main.styled'
import { FlexedWrapper } from '../../../components/FlexWrapper'
import photo from '../../../assets/images/photo.webp'
import { StyledButton } from "../../../components/Button";
import { Container } from '../../../components/Container'

export const Main: FC = () => {
  return (
    <S.Main>
      <Container>
        <FlexedWrapper
          align="center"
          justify="space-around"
          wrap="wrap-reverse"
        >
          <S.GreeitngsBlock>
            <S.Greetings>Hi &#128075;</S.Greetings>
            <S.Greetings>My Name is</S.Greetings>
            <S.Name as="h2">TATIANA KOSTECKI</S.Name>
            <S.Greetings as="h1">I am a Web Developer</S.Greetings>
            <StyledButton>Contact me</StyledButton>
          </S.GreeitngsBlock>
          <S.PhotoWrapper>
            <S.Photo src={photo} alt="image" />
          </S.PhotoWrapper>
        </FlexedWrapper>
      </Container>
    </S.Main>
  );
}
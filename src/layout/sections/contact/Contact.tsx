import React, { FC } from 'react'
import * as S from './Contact.styled'
import { SectionTitle } from '../../../components/SectionTitle'
import { StyledButton } from "../../../components/Button";
import { Container } from '../../../components/Container'

export const Contact: FC = () => {
    return (
      <S.Contacts id='contact'>
        <Container>
          <SectionTitle>Contact</SectionTitle>
          <S.StyledForm>
            <S.Field placeholder="Name" />
            <S.Field placeholder="Subject"></S.Field>
            <S.Field as="textarea" placeholder="Message"></S.Field>
            <StyledButton type="submit">Submit</StyledButton>
          </S.StyledForm>
        </Container>
      </S.Contacts>
    );
   }
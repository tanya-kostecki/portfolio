import React, { FC } from 'react'
import * as S from './Contact.styled'
import { SectionTitle } from '../../../components/SectionTitle'
import { StyledButton } from "../../../components/Button";
import { Container } from '../../../components/Container'
import { theme } from "../../../styles/Theme";
import { FlexedWrapper } from "../../../components/FlexWrapper";

export const Contact: FC = () => {
  return (
    <S.Contacts id="contact">
      <Container>
        <SectionTitle>Contact Me</SectionTitle>

        <FlexedWrapper justify="space-around" wrap="wrap" gap="40px">
          <S.StyledForm>
            <S.Field placeholder="Name" />
            <S.Field placeholder="Subject"></S.Field>
            <S.Field as="textarea" placeholder="Message"></S.Field>
            <StyledButton type="submit">Submit</StyledButton>
          </S.StyledForm>

          <FlexedWrapper direction="column" gap="15px" padding="15px">
            <S.ContactTitle>Address:</S.ContactTitle>
            <S.ContactDetail>Randomstrasse 5</S.ContactDetail>
            <S.ContactDetail>2130 Mistelbach, NÖ</S.ContactDetail>
            <S.ContactDetail>Austria</S.ContactDetail>
          </FlexedWrapper>
        </FlexedWrapper>

        <FlexedWrapper justify="space-around" wrap="wrap" marginTop="40px">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10578.991020305653!2d16.463869167536963!3d48.4805517905312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d17e6069efe55%3A0xabec393f998c156f!2s2124%20Kreuzstetten!5e0!3m2!1sde!2sat!4v1710919517813!5m2!1sde!2sat"
            width="100%"
            style={{
              border: "7px solid",
              borderImage: `${theme.colors.darkAccent}1`,
              minHeight: "500px",
            }}
            loading="lazy"
          ></iframe>
        </FlexedWrapper>
      </Container>
    </S.Contacts>
  );
};


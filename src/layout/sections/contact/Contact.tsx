import React, { ElementRef, FC, useRef } from "react";
import * as S from "./Contact.styled";
import { SectionTitle } from "../../../components/SectionTitle";
import { StyledButton } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { FlexedWrapper } from "../../../components/FlexWrapper";
import emailjs from "@emailjs/browser";

export const Contact: FC = () => {
  const form = useRef<ElementRef<"form">>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_utlcdcj", "template_ms3w84h", form.current, {
        publicKey: "BjN8XBD6YxaLtpcg5",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    e.target.reset();
  };

  return (
    <S.Contacts id="contact">
      <Container>
        <SectionTitle>Contact Me</SectionTitle>

        <FlexedWrapper justify="space-around" wrap="wrap" gap="40px">
          <S.Form ref={form} onSubmit={sendEmail}>
            <S.Field required placeholder="Name" name="user_name" />
            <S.Field required placeholder="Email" name="email" />
            <S.Field required placeholder="Subject" name="subject"></S.Field>
            <S.Field
              required
              as="textarea"
              placeholder="Message"
              name="message"
            ></S.Field>
            <StyledButton type="submit">Submit</StyledButton>
          </S.Form>

          <FlexedWrapper direction="column" gap="15px" padding="15px">
            <S.ContactTitle>Address:</S.ContactTitle>
            <S.ContactDetail>Randomstrasse 5</S.ContactDetail>
            <S.ContactDetail>1234 Random City, NÖ</S.ContactDetail>
            <S.ContactDetail>Country</S.ContactDetail>
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

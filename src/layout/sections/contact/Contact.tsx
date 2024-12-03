import React, { ElementRef, FC, useRef } from "react";
import * as S from "./Contact.styled";
import { SectionTitle } from "../../../components/SectionTitle";
import { StyledButton } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { FlexedWrapper } from "../../../components/FlexWrapper";
import emailjs from "@emailjs/browser";

export const Contact: FC = () => {
  const form = useRef<ElementRef<"form">>(null);
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID!;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID!;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY!;

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey
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
        </FlexedWrapper>
      </Container>
    </S.Contacts>
  );
};

import styled from "styled-components";
import { theme } from "../../../styles/Theme";

export const Contacts = styled.section`
  position: relative;
  background-color: ${theme.colors.darkBg};
  min-height: 95vh;
`;

export const StyledForm = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  /* margin: 0 auto; */

  textarea {
    resize: none;
    height: 165px;
  }
`;

export const Field = styled.input`
  width: 100%;
  background-color: transparent;
  border: 1px solid ${theme.colors.darkFont};
  border-radius: 6px;
  padding: 15px 18px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: left;
  color: ${theme.colors.darkFont};

  &:focus-visible {
    outline: 1px solid;
    border-image: ${theme.colors.darkAccent}1;
  }

  &::placeholder {
    color: ${theme.colors.placeholderColor};
    text-transform: capitalize;
  }
`;

export const ContactDetail = styled.span`
  display: block;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
`;

export const ContactTitle = styled(ContactDetail)`
  font-size: 18px;
  font-weight: 700;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    height: 3px;
    width: 100%;
    background-image: ${theme.colors.darkAccent};
    bottom: 0;
    left: 0;
  }
`;
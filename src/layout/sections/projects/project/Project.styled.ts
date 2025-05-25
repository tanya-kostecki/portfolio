import styled from "styled-components";
import { theme } from "../../../../styles/Theme";
import { FlexedWrapper } from "../../../../components/FlexWrapper";
import { StyledButton } from "../../../../components/Button";

export const ProjectItem = styled.div`
  background-color: #222525;
  border-radius: 30px 30px 0 0;
    display: flex;
    flex-direction: column;
  margin: 10px;
  min-height: 530px;
    height: 100%;

  filter: drop-shadow(0px 0px 3px ${theme.colors.darkGradientFirst})
    drop-shadow(0px 0px 3px ${theme.colors.darkGradientSecond});
`;

export const ProjectLink = styled(StyledButton)`
  display: none;
`;
export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  border-radius: 30px 30px 0 0;
    max-height: 200px;
`;

export const ImageBlock = styled.div`
  position: relative;
  width: 100%;

  &:hover {
    ${ProjectLink} {
      display: block;
      color: black;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-right: -50%;
      transform: translate(-50%, -50%);

      &:hover {
        transform: translate(-50%, -30%);
      }
    }
    ${Image} {
      filter: blur(4px);
      -webkit-filter: blur(4px);
      transition: ${theme.animations.transition};
    }
  }
`;

export const ProjectContent = styled.div`
    padding: 30px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Title = styled.h3`
    width: 100%;
    padding-bottom: 17px;
`

export const Description = styled.p`
    width: 100%;
`

export const ProjectWrapper = styled(FlexedWrapper)`
  padding-top: 20px;
    height: fit-content;

  div {
    transition: ${theme.animations.transition};
  }

  div:hover {
    transform: scale(1.2);
  }
`;
export const Link = styled.a`
    margin-left: 10px;
    position: relative;

    &:hover {
        color: ${theme.colors.darkFont};
        font-size: 18px;
        transition: ${theme.animations.transition};

        &::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 3px;
            bottom: 0;
            right: 0;
            background-image: ${theme.colors.darkAccent};
        }
    }
`

export const StackBlock = styled.div`
    margin-bottom: 20px;
    
    & span:first-child {
        font-weight: 700;
        text-decoration: underline;
    }
`
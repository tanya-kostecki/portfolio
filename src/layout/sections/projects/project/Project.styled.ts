import styled from "styled-components";
import { theme } from "../../../../styles/Theme";
import { FlexedWrapper } from "../../../../components/FlexWrapper";

export const ProjectItem = styled.div`
  background-color: #222525;
  border-radius: 30px 30px 0px 0px;
  margin: 10px;
  max-width: 540px;
  width: 330px;
  flex-grow: 1;
  filter: drop-shadow(0px 0px 3px ${theme.colors.darkGradientFirst})
        drop-shadow(0px 0px 3px ${theme.colors.darkGradientSecond});

  /* &:hover {
    filter: drop-shadow(0px 0px 5px ${theme.colors.darkGradientFirst})
      drop-shadow(0px 0px 5px ${theme.colors.darkGradientSecond});
  } */
`;

export const Image = styled.img`
    object-fit: cover;
    width: 100%;
    border-radius: 30px 30px 0px 0px;
`

export const ProjectContent = styled.div`
    padding: 30px;
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

    div {
        transition: .2s ease-in-out;
    }

    div:hover {
        transform: scale(1.2);
    }

`
export const Link = styled.a`
    margin-left: 10px;
    position: relative;

    &:hover {
        color: ${theme.colors.darkFont};
        font-size: 18px;

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
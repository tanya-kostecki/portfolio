import styled from "styled-components";
import { theme } from "../../../../styles/Theme";
import { font } from "../../../../styles/Common";

export const SkillItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px;
    gap: 10px;
`

export const SkillName = styled.span`
  ${font({ family: 'Montserrat, sans-serif', weight: 400, color: theme.colors.darkFont, Fmax: 16, Fmin: 14 })};
  text-align: center;
  text-transform: uppercase;
`

export const MobileStyledSkillItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    gap: 10px;
`

export const MobileSkillName = styled.span`
  text-align: center;
`
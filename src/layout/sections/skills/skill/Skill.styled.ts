import styled from "styled-components";

export const SkillItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px;
    gap: 10px;

    @media screen and (max-width: 655px) {
      margin: 20px;
    }
`
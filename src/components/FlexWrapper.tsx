import styled from "styled-components";

type FlexedWrapperProps = {
    direction?: string;
    justify?: string;
    align?: string;
    wrap?: string;
    gap?: string;
}

export const FlexedWrapper = styled.div<FlexedWrapperProps>`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || " flex-start"};
    align-items: ${props => props.align || "stretch"};
    flex-wrap: ${props => props.wrap || "no-wrap"};
    gap: ${props => props.gap};
    height: 100%;
`
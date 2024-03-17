import React from 'react'
import styled from 'styled-components'
import { Icon } from '../../../../components/icon/Icon'
import { theme } from '../../../../styles/Theme';
import { FlexedWrapper } from '../../../../components/FlexWrapper';

type ProjectPropsType = {
    image: string;
    title: string;
    description: string;
}
export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProjectItem >
        <Image src={props.image}/>

        <ProjectContent>
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>

            <ProjectWrapper justify='space-between' align='flex-end'>
                <div>
                    <Icon iconId='preview' height='17px' width='17px' viewBox='0 0 17 17' stroke={theme.colors.darkFont} fill='none'/>
                    <Link href='#'>live preview</Link>
                </div>
                <div>
                    <Icon iconId='github' height='20px' width='20px' viewBox='0 0 130 85' fill={theme.colors.darkFont}/>
                    <Link href='#'>view code</Link>
                </div>
            </ProjectWrapper>
        </ProjectContent>
    </StyledProjectItem>
  )
}

const StyledProjectItem = styled.div`
    /* width: 30%; */
    background-color: #222525;
    border-radius: 30px 30px 0px 0px;
    margin: 10px;
    /* min-width: 300px; */

    max-width: 540px;
    width: 330px;

    transition: .4s ease;

    flex-grow: 1;
    flex-shrink: 0.6;

    &:hover {
        transform: scale(1.05);
        filter: drop-shadow(0px 0px 5px ${theme.colors.darkGradientFirst}) drop-shadow(0px 0px 5px ${theme.colors.darkGradientSecond});
    }
`

const Image = styled.img`
    object-fit: cover;
    width: 100%;
    border-radius: 30px 30px 0px 0px;
`

const ProjectContent = styled.div`
    padding: 30px;
`

const Title = styled.h3`
    width: 100%;
    padding-bottom: 17px;
`

const Description = styled.p`
    width: 100%;
`

const ProjectWrapper = styled(FlexedWrapper)`
    padding-top: 20px;
`
const Link = styled.a`
    margin-left: 10px;
`
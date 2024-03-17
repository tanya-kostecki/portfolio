import React from 'react'
import styled from 'styled-components'
import { FlexedWrapper } from '../../../components/FlexWrapper'
import photo from '../../../assets/images/photo.webp'
import { Button } from '../../../components/button/Button'
import { Container } from '../../../components/Container'
import { theme } from '../../../styles/Theme'
import { font } from '../../../styles/Common'

export const Main = () => {
  return (
    <StyledMain>
       <Container>
            <FlexedWrapper align='center' justify='space-around' wrap='wrap-reverse'>
                <GreeitngsBlock>
                    <Greetings>Hi &#128075;</Greetings>
                    <Greetings>My Name is</Greetings>
                    <Name as='h2'>TATIANA KOSTECKI</Name>
                    <Greetings as='h1'>I am a Web Developer</Greetings>
                    <Button>Contact me</Button>
                </GreeitngsBlock>
                <PhotoWrapper>
                    <Photo src={photo} alt='image'/>
                </PhotoWrapper>                
            </FlexedWrapper>
       </Container>
    </StyledMain>
  )
}

const StyledMain = styled.section`
    min-height: 100vh;
    display: flex;
`

const GreeitngsBlock = styled.div`
    background-image: ${theme.colors.darkAccent};
    background-clip: text;
    -webkit-background-clip: text;
`
const Greetings = styled.span`
    display: block;
    ${font({ family: 'Montserrat, sans-serif', weight: 700, color: theme.colors.darkFont, Fmax: 36, Fmin: 18 })}
    margin: 10px 0;

    @media ${theme.media.mobile} {
        margin: 10px 0 15px;
    }
`
const Name = styled(Greetings)`
    ${font({ family: 'Montserrat, sans-serif', weight: 700, color: 'transparent', Fmax: 58, Fmin: 32 })}; //36
    white-space: nowrap;
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
    margin-right: 15px;

    @media ${theme.media.mobile} {
        width: 310px;
        height: 380px;
    }
`

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;
    margin-bottom: 25px;
    margin-top: 25px;

    @media ${theme.media.mobile} {
        margin-bottom: 25px;
    }

    &::before {
        content: "";
        width: 360px;
        height: 470px;
        border: 5px solid;
        border-image: ${theme.colors.darkAccent}1;

        position: absolute;
        top: -24px;
        left: 24px;
        z-index: -1;

        @media ${theme.media.mobile} {
            width: 314px;
            height: 414px;
            top: -17px;
            left: 20px;
        }
    }
`
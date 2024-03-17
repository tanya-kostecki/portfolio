import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { Container } from '../../../components/Container'
import { FlexedWrapper } from '../../../components/FlexWrapper'
import { theme } from '../../../styles/Theme'

export const About = () => {
  return (
    <StyledAbout>
      <Container>
        <FlexedWrapper direction='column' justify='center' gap='20px'>
          <SectionTitle>About me</SectionTitle>
          <Paragraph>The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet) in length, with a chamber built from sarsen megaliths on its eastern end. Both inhumed and cremated human remains were placed within this chamber during the Neolithic period, representing at least nine or ten individuals.</Paragraph>
        </FlexedWrapper>
      </Container>
    </StyledAbout>
  )
}

const StyledAbout = styled.section`
  display: flex;
`

const Paragraph = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  text-align: left;
  max-width: 840px;
  padding-left: 10px;

  display: flex;
  gap: 10px;

  &::before {
    content: "";
    display: inline-block;
    width: 5px;
    height: 100%;
    background-color: ${theme.colors.darkFont};
  }
`

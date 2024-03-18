import React, { FC } from 'react'
import * as S from './About.styled'
import { SectionTitle } from '../../../components/SectionTitle'
import { Container } from '../../../components/Container'
import { FlexedWrapper } from '../../../components/FlexWrapper'

export const About: FC = () => {
  return (
    <S.About id="about">
      <Container>
        <FlexedWrapper direction="column" justify="center" gap="20px">
          <SectionTitle>About me</SectionTitle>
          <S.Paragraph>
            The long barrow was built on land previously inhabited in the
            Mesolithic period. It consisted of a sub-rectangular earthen
            tumulus, estimated to have been 15 metres (50 feet) in length, with
            a chamber built from sarsen megaliths on its eastern end. Both
            inhumed and cremated human remains were placed within this chamber
            during the Neolithic period, representing at least nine or ten
            individuals.
          </S.Paragraph>
        </FlexedWrapper>
      </Container>
    </S.About>
  );
}

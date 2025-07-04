import React, { FC } from 'react'
import * as S from './Project.styled'
import { Icon } from '../../../../components/icon/Icon'
import { theme } from '../../../../styles/Theme';

type ProjectPropsType = {
    image: string;
    title: string;
    description: string;
    type?: string;
    href?: string;
    deploy?: string
    stack: string
}
export const Project: FC<ProjectPropsType> = (props) => {
  return (
    <S.ProjectItem >
        <S.ImageBlock>
            <S.Image src={props.image}/>
            <S.ProjectLink as='a' href={props.href}>View Project</S.ProjectLink>
        </S.ImageBlock>
        <S.ProjectContent>
            <div>
                <S.Title>{props.title}</S.Title>
                <S.StackBlock>
                    <span>Tech stack: </span>
                    <span>{props.stack}</span>
                </S.StackBlock>
                <S.Description>{props.description}</S.Description>
            </div>

            <S.ProjectWrapper justify='space-between' align='flex-end' $isDeployed={!!props.deploy}>
                <div>
                    <Icon
                        iconId='preview'
                        height='17px'
                        width='17px'
                        viewBox='0 0 17 17'
                        stroke={props.deploy ? theme.colors.darkFont : 'grey'}
                        fill='none'
                        style={{ opacity: props.deploy ? 1 : 0.5 }}
                    />
                    <S.Link href={props.deploy} $isDeployed={!!props.deploy}>live preview</S.Link>
                </div>
                <div>
                    <Icon iconId='github' height='20px' width='20px' viewBox='0 0 130 85' fill={theme.colors.darkFont}/>
                    <S.Link href={props.href} $isDeployed>view code</S.Link>
                </div>
            </S.ProjectWrapper>
        </S.ProjectContent>
    </S.ProjectItem>
  )
}
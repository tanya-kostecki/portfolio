import React from 'react'
import iconsSprite from '../../assets/images/sprite.svg'

type IconPropsType = {
    iconId: string;
    width?: string;
    height?: string;
    viewBox?: string;
    stroke?: string;
    fill?: string;
}
export const Icon = (props: IconPropsType) => {
  return (
    <svg width={props.width || '120px'} height={props.height || '115px'} viewBox={props.viewBox || '0 0 120 115'} fill={props.fill} stroke={props.stroke} xmlns="http://www.w3.org/2000/svg">
        <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
    </svg>
  )
}

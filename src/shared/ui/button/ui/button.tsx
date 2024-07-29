import { FC } from 'react'

import style from './style.module.scss'

interface IButton {

    readonly children: string | JSX.Element | JSX.Element[]

    readonly className?: string

    readonly active?: boolean

    readonly id?: string | number

    readonly onClick?: () => void
}

export const Button: FC<IButton> = (props) => {
  return (
    <div
    className={`
    ${style.root} 
    ${props.active ? style.root_active : ''}
    ${props.className}
    `}
    key={props.id}
    onClick={props.onClick}
    >
      {props.children}
    </div>
  )
}

import React from 'react'
import { ObjectType } from 'typescript'

type props = {
    type: string,
    styles?: string
}

const typesStyles = {
    primary: 'bg-sky-500',
    secondary: 'bg-purple-400'
}

function Button({type, styles, ...restProps}: props): React.ReactElement {

  return (
    <button {...restProps} className={`py-2 px-5 rounded-lg ${type === 'primary' && typesStyles.primary} ${type === 'secondary' && typesStyles.secondary} ${styles}`}>Button</button>
  )
}

export default Button
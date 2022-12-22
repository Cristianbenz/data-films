import React from 'react'

type props = {
    variant: string;
    styles?: string;
    type? : 'button' | 'submit' | 'reset' | undefined;
    children: string;
}

const typesStyles = {
    primary: 'bg-sky-500',
    secondary: 'bg-secondary'
}

function Button({variant, styles, children, type}: props): React.ReactElement {

  return (
    <button type={type}  className={`py-2 px-5 rounded-lg ${variant === 'primary' && typesStyles.primary} ${variant === 'secondary' && typesStyles.secondary} ${styles}`}>
      {children}
    </button>
  )
}

export default Button
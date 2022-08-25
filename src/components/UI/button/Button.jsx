import React from 'react'
import cl from './Button.module.css'

const Button = (inner) => {
    return (
        <div className={cl.mod_btn}>{inner}</div>
    )
}

export default Button
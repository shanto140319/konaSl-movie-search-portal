import React from 'react'
import style from './common.module.scss'
const Title = ({ children, ...props }) => {
  return (
    <h2 className={style.title} {...props}>
      {children}
    </h2>
  )
}

export default Title

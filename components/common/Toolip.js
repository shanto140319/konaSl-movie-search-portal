import React from 'react'
import style from './common.module.scss'
const Toolip = ({ children }) => {
  return (
    <div className={style.tooltipWrapper}>
      <div className={style.tooltipText}>{children}</div>
    </div>
  )
}

export default Toolip

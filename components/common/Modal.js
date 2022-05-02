import React from 'react'
import style from './common.module.scss'

const Modal = ({ onClose, children }) => {
  return (
    <div className={style.modalWrapper}>
      <div className={style.modal}>
        <div className={`btn ${style.closeBtn}`} onClick={onClose}>
          close
        </div>
        {children}
      </div>
    </div>
  )
}

export default Modal

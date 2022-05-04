import React from 'react'
import style from './common.module.scss'
import { MdClose } from 'react-icons/md'

const Modal = ({ onClose, children, height, width, maxWidth }) => {
  return (
    <div className={style.modalWrapper}>
      <div
        className={style.modal}
        style={{ height: height, width: width, maxWidth: maxWidth }}
      >
        <div className={style.closeBtn} onClick={onClose}>
          <MdClose />
        </div>
        {children}
      </div>
    </div>
  )
}

export default Modal

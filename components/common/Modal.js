import React from 'react'
import style from './common.module.scss'
import { MdClose } from 'react-icons/md'

const Modal = ({ onClose, children }) => {
  return (
    <div className={style.modalWrapper}>
      <div className={style.modal}>
        <div className={style.closeBtn} onClick={onClose}>
          <MdClose />
        </div>
        {children}
      </div>
    </div>
  )
}

export default Modal

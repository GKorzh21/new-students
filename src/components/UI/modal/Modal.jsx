import React from 'react'
import cl from './Modal.module.css'

const Modal = ({IdToDelete, setVisible, id}) => {

    let classes = [cl.modal_wrap]

    if (IdToDelete !== '') {
        classes.push(cl.active)
    }

    return (
        <div className={classes.join(' ')} onClick={() => setVisible('')}>
            <div className={cl.modal} onClick={(e) => e.stopPropagation()}>
                <p>ВЫ ДЕЙСТВИТЕЛЬНО ХОТИТЕ</p>
                <p>УДАЛИТЬ АБИТУРИЕНТА?</p>
                <div className={cl.mod_btn_block}>
                    <div
                        style={{marginRight:'4px'}}
                        className={cl.mod_btn}
                        onClick={() => setVisible('')}
                    >Отменить</div>
                    <div className={cl.mod_btn}>Удалить</div>
                </div>
            </div>
        </div>
    )
}

export default Modal
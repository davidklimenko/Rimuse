import React, { useState } from 'react'
import style from '../ModalCreatingPlaylistModal/ModalWindow.css'

export default ({setIsModal}) => {
    const onClose = function(){
        setIsModal(false);
    }
    const [inputValue, setInpuValue] = useState();
    return (
        <div className={style.modal}>
          <div className={style.modal_dialog}>
            <div className={style.modal_header}>
              <h3 className={style.modal_title}>Creating new playlist...</h3>
              <span className={style.modal_Close}>
              </span>
            </div>
            <div className={style.modal_body}>
              <input type="text" value={inputValue} onChange={(e) => setInpuValue(e.target.value)}/>
              <div className={style.modal_button}>
                <button onClick={console.log(inputValue)}>Create</button>
                <button onClick={onClose}>Cancel</button>
              </div>
            </div>
            <div className={style.modal_footer}></div>
          </div>
        </div>
    )

}
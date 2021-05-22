import React, { useState } from 'react'
import './ModalWindow.css'

export default ({setIsModal}) => {
    const onClose = () => {
        setIsModal(false);
    }
    const [inputValue, setInpuValue] = useState();
    return (
        <div className="modal" onClick={onClose}>
          <div className="modal-dialog"  onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">Creating new playlist...</h3>
              <span className="modal-Close">
              </span>
            </div>
            <div className="modal-body">
              <input type="text" value={inputValue} onChange={(e) => setInpuValue(e.target.value)}/>
              <div className="modal-button">
                <button className="modal-button-use" onClick={console.log(inputValue)}>Create</button>
                <button className="modal-button-use" onClick={onClose}>Cancel</button>
              </div>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
    )

}
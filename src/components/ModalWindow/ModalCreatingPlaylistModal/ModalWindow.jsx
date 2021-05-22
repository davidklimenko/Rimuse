import React, { useState } from 'react'
import './ModalWindow.css'

export default ({setIsModal, setvaluePlayList}) => {
  const [localState, setlocalState] = useState('');

    const onClose = () => {
      setIsModal(false);
    }

    const takeValue = () => {
      setvaluePlayList(localState);
      setIsModal(false);
      setlocalState('');
      alert('Playlist created' +' '+ localState)
    }

    return (
        <div className="modal" onClick={onClose}>
          <div className="modal-dialog"  onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">Creating new playlist...</h3>
              <span className="modal-Close">
              </span>
            </div>
            <div className="modal-body">
              <input type="text" value={localState} onChange={(e) => setlocalState(e.target.value)}/>
              <div className="modal-button">
                <input type="submit" value="Create" onClick={takeValue}/>
                <button className="modal-button-use" onClick={onClose}>Cancel</button>
              </div>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
    )

}
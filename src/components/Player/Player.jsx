import React, { useState } from 'react'
import style from './Player.module.css'
import logo from '../../img/Song__Logo-player.png'
import ModalWindow from "../ModalWindow/ModalCreatingPlaylistModal/ModalWindow.jsx"


export default function Player(){
    const [isModal, setIsModal] = useState(false);

    return (
        <div className={style.player}>
            <div className={style.upperContent}>
                <div className={style.upper_title}>
                    <h1>104 - НЕ ЖАЛЬ ft. Скриптонит</h1>
                </div>
                <div className={style.upper_photo}>
                    <img src={logo} alt="image not found"/>
                </div>
                <button onClick={()=>{
                    setIsModal(true)
                }}>dasdasdasdads</button>
                { isModal && <ModalWindow setIsModal={setIsModal}/>}
                
            </div>
            <div className={style.lowerContent}>
            </div>
        </div>
    )

    
}
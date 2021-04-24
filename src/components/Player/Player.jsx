import react from 'react'
import style from './Player.module.css'
import logo from '../../img/Song__Logo-player.png'

export default function Player(){
    return (
        <div className={style.player}>
            <div className={style.upperContent}>
                <div className={style.upper_title}>
                    <h1>104 - НЕ ЖАЛЬ ft. Скриптонит</h1>
                </div>
                <div className={style.upper_photo}>
                    <img src={logo} alt="image not found"/>
                </div>
            </div>
            <div className={style.lowerContent}>

            </div>
        </div>
    )
}
import react from 'react'
import style from './Song.module.css'
import logo from '../../../../img/Song_Logo.png'
import detail__icon from '../../../../img/detail-icon.svg'


 const Song = ({data}) => {
    return (
        <div className={style.song}>
            <div className={style.song__left}>
                <div className={style.song__left_img}>
                    <img src={logo} alt="image not found"/>
                </div>

                <div className={style.song__left_text}>
                    <h1>{data.songName}</h1>
                    <div className={style.song__left_text_detail}>
                        <span> MP3 </span> |
                        <span> 44kHz </span> |
                        <span> 128kbps </span> |
                        <span> 7.60 MB </span>
                    </div>
                </div>
            </div>

            <div className={style.song__right}>
                <span className={style.song__right_time}>
                    <h2>03:35</h2>
                </span>
                <img src={detail__icon} alt="image not found"/>
            </div>
        </div>
    )
}

export default Song
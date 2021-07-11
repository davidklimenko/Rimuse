import react, { useEffect, useState } from 'react'
import style from './Song.module.css'
import logo from '../../../../img/Song_Logo.png'
import detail__icon from '../../../../img/detail-icon.svg'
import favoriteIcon from '../../../../img/nav/favorite.svg'
import {useSelector, useDispatch } from 'react-redux'
import {add_favorites, add_local, get_from_local} from '../../../../redux/actions/actions.js'

 const Song = ({data}) => {

    const [fuck, setFuck] = useState({})
    const dispath = useDispatch()

    const addFavor = (e) => {
        setFuck(data)
        dispath(add_favorites(fuck))
    }

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
                <div className={style.dropdown}>
                    <img src={detail__icon} alt="image not found"/>
                    <div className={style.dropdown_content}>
                        <button id={data.id} onClick={addFavor}><img src={favoriteIcon} alt="image not found"/> Favorites</button>
                        <button href="#">Link 2</button>
                        <button href="#">Link 3</button>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Song
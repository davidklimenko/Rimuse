import react from 'react'
import style from './Playlist.module.css'
import Song from './Song/Song'

export default function PlayList(){
    return (
       <div className={style.playlist}>
           <div className={style.playlist__title}>
                <h1 className={style.playlist__title_text}>My songs</h1>
                <div className={style.playlist__title_line}></div>
           </div>
                <Song />
                <Song />
                <Song />
                <Song />
                <Song />
                <Song />
                <Song />
                <Song /> 
       </div>
        
    )
}
import react from 'react'
import Playlist from './Playlist/Playlist'
import style from './Catalog.module.css'

export default function Player(){
    return (
        <div className={style.playlist}>
            <h1>Playlists</h1>
            <Playlist/>
            <Playlist/>
            <Playlist/>
            <Playlist/>
        </div>

    )
}
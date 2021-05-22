import React from 'react'
import uploadImg from './img/upload_song.svg'
import style from './Playlist.module.css'
import Song from './Song/Song'
import {useSelector} from 'react-redux'

const PlayList = (props) => {
    const currentPlaylistId = props.match.params.id
    let {catalog} = useSelector( state => state.catalogReducer)

    const [currentPlaylist] = catalog.filter( item => {
        return item.id === currentPlaylistId && item
    })
    if (!currentPlaylist) { // no such id  => redirect
        return null
    }

    const renderSongs = () => {
        let playlistHasSongs = false
        let res = currentPlaylist.songs.map( (item, index) => {
            playlistHasSongs = true
            return <Song data={item} key={item.id + index}/>
        })

        if (!playlistHasSongs) {
            return <div className={style.noSongs}>No songs</div>
        } else {
            return res
        }
    }

    return (
        <div className={style.playlist}>
            <div className={style.playlist__top}>
                <div className={style.playlist__title}>
                    <h1 className={style.playlist__title_text}>{currentPlaylist.playlistName}</h1>
                    <div className={style.playlist__title_line}></div>
                </div>
                <div className={style.playlist__upload}>
                    <span className={style.playlist__upload_text}>Upload song</span>
                    <img src={uploadImg} className={style.playlist__upload_image} alt="image not found"/>
                </div>
            </div>
            {renderSongs()}
        </div> 
        )
}

export default PlayList
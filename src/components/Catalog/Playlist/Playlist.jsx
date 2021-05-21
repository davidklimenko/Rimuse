import react from 'react'
import style from './Playlist.module.css'
import Song from './Song/Song'
import {useSelector} from 'react-redux'

const PlayList = (props) => {
    console.log(props)
    const currentPlaylistId = props.match.params.id
    let {catalog} = useSelector( state => state.catalogReducer)

    const [currentPlaylist] = catalog.filter( item => {
        return item.id === currentPlaylistId && item
    })

    const renderSongs = () => {
        let playlistHasSongs = false
        let res = currentPlaylist.songs.map( (item, index) => {
            playlistHasSongs = true
            return <Song data={item} key={item.id + index}/>
        })

        if (!playlistHasSongs) {
            return <div>No songs</div>
        } else {
            return res
        }
    }

    return (
        <div className={style.playlist}>
            <div className={style.playlist__title}>
                    <h1 className={style.playlist__title_text}>{currentPlaylist.playlistName}</h1>
                    <div className={style.playlist__title_line}></div>
                    {renderSongs()}
            </div>
        </div> 
        )
}

export default PlayList
import React from 'react'
import Playlist from './Playlist/Playlist'
import style from './Catalog.module.css'
import {useSelector} from 'react-redux'

const Catalog = (props) => {

    // let {catalog} = useSelector( state => state.catalogReducer)

    // const renderPlaylists = () => {
    //     return catalog.map( item => {
    //         if (item.type === 'CUSTOM-PLAYLIST') {
    //             return <Playlist data={item}/>
    //         }
    //     })
    // }

    // return (
    //     <div className={style.catalog}>
    //         <h1>Catalog</h1>
    //        {renderPlaylists()}
    //     </div>

    // )
}

export default Catalog
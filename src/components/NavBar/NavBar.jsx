import React, {useState} from "react"
import {NavLink} from "react-router-dom"

import logo from '../../img/nav/logo.svg'
import homeIcon from '../../img/nav/home.svg'
import playListIcon from '../../img/nav/playlist.svg'
import addPlaylistIcon from '../../img/nav/addPlaylist.svg'
import favoriteIcon from '../../img/nav/favorite.svg'
import style from './NavBar.module.css'
import ModalWindow from '../ModalWindow/ModalCreatingPlaylistModal/ModalWindow'

import {useSelector} from 'react-redux'

export default function NavBar() {
  const [isModal, setIsModal] = useState(false);
  const [playlistTitle, setPlaylistTitle] = useState('');


  const inputHandler = (e) => {
    setPlaylistTitle(e.target.value)
  }

  const submitForm = () => {
      console.log(playlistTitle)
      setPlaylistTitle('')
      setIsModal(false)
  }

  const onClose = () => {
    setIsModal(false)
    setPlaylistTitle('')
  }
  console.log(playlistTitle)

  let {catalog} = useSelector( state => state.catalogReducer)

  const [main] = catalog.filter( item => { // object main playlist
    return item.type === 'MAIN-PLAYLIST' && item
  })

  const [favorite] = catalog.filter( item => { // object favorite playlist
    return item.type === 'FAVORITES-PLAYLIST' && item
  })

  const modalWindowParams = {
    playlistTitle,
    inputHandler,
    submitForm,
    onClose
  }

  const renderPlaylists = () => {
    let hasCustomPlaylist = false
    const res = catalog.map( item => {
      if (item.type === 'CUSTOM-PLAYLIST') {
        hasCustomPlaylist = true
        return (
            <li key={item.id}>
              <NavLink to={`/playlist/${item.id}`} activeClassName={style.active} className={`${style.navLink} ${style.customNavLink}`}>
                <span>{item.playlistName}</span>
              </NavLink>
            </li>
        )
      }
    })

    if (!hasCustomPlaylist) {
      return <li className={style.noPlaylist}>No playlists...</li>
    } else {
      return res
    }
}
    return (
        <div className={style.nav_panel}>
          <div className={style.nav_panel__logo}>
            <img src={logo} alt="Image not found"/>
          </div>
          <nav className={style.nav}>
            <ul>
              <li>
                <NavLink to={`/playlist/${main.id}`} activeClassName={style.active} className={style.navLink}>
                  <img src={homeIcon} alt="image not found"/>
                  <span>{main.playlistName}</span>
                  <span>143</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={`/playlist/${favorite.id}`} activeClassName={style.active} className={style.navLink}>
                  <img src={favoriteIcon} alt="image not found"/>
                  <span>{favorite.playlistName}</span>
                  <span>143</span>
                </NavLink>
              </li>
              <li>
                <div className={style.navLink}>
                    <img src={playListIcon} alt="image not found"/>    

                  <span style={{marginLeft: '-15px'}}>Playlists</span>
                  <img src={addPlaylistIcon} style={{marginRight: '8px'}} alt="image not found" onClick={() => {
                    setIsModal(true)
                  }}/>
                  { isModal && <ModalWindow data={modalWindowParams} />}
                </div>
              </li>
            </ul>
            <div className={style.navPlaylist}>
              <ul>
                {renderPlaylists()}
              </ul>
            </div>
          </nav> 
        </div> 
    )
}
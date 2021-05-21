import React from "react"
import {NavLink} from "react-router-dom"
import style from './NavBar.module.css'
import logo from '../../img/nav/logo.svg'
import {useSelector} from 'react-redux'

export default function NavBar() {

  let {catalog} = useSelector( state => state.catalogReducer)


  const [main] = catalog.filter( item => { // object main playlist
    return item.type === 'MAIN-PLAYLIST' && item
  })

  const [favorite] = catalog.filter( item => { // object favorite playlist
    return item.type === 'FAVORITES-PLAYLIST' && item
  })



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
                  <span>{main.playlistName}</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={`/playlist/${favorite.id}`} activeClassName={style.active} className={style.navLink}>
                  <span>{favorite.playlistName}</span>
                </NavLink>
              </li>
              <li>
                <div className={style.navLink}>
                  <span>Playlists</span>
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
import React from "react"
import {
  NavLink
} from "react-router-dom"
import style from './NavBar.module.css'

export default function NavBar(){
    return (
        <div className={style.nav_panel}>
          <nav>
            <ul>
              <li>
                <NavLink to="/">My songs</NavLink>
              </li>
              <li>
                <NavLink to="/favorites">Favorites</NavLink>
              </li>
              <li>
                <NavLink to="/catalog">Playlists</NavLink>
              </li>
            </ul>
          </nav> 
        </div> 
    )
}
import React from "react"
import {
  NavLink
} from "react-router-dom"

export default function NavBar(){
    return (
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
    )
}
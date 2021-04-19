import React from "react"
import {
  Link
} from "react-router-dom"

export default function NavBar(){
    return (
        <nav>
        <ul>
          <li>
            <Link to="/">My songs</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
          <li>
            <Link to="/playlists">Playlists</Link>
          </li>
        </ul>
      </nav>  
    )
}
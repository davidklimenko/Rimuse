import './App.css'
import react from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Navbar from "./components/NavBar/NavBar"
import PlayList from "./components/Playlist/Playlist"
import Player from "./components/Player/Player"

export default function App() {
  return (
    <BrowserRouter>
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
      {/* <Navbar></Navbar> */}
      <Switch>
          <Route path="/">
              <PlayList></PlayList>
          </Route>
          <Route path="/playlists">
              <Player></Player>
          </Route>
      </Switch>
    </BrowserRouter>
  );
}



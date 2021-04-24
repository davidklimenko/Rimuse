import './App.css'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom"

import NavBar from "./components/NavBar/NavBar"
import Catalog from "./components/Catalog/Catalog"
import Playlist from './components/Catalog/Playlist/Playlist'
import Player from "./components/Player/Player"
import Favorites from "./components/Favorites/Favorites"

export default function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="container">
          <NavBar/>
          <div className="content">
            <div className="main">
              <Route exact={true} path="/" render={() => <Playlist/>}/>
              <Route exact={true} path="/favorites" render={() => <Favorites/>}/>
              <Route exact={true} path="/catalog" render={() => <Catalog/>}/>
            </div>  
            <Player/>
          </div>
        </div>
      </div>
    </BrowserRouter>
    
  );
}



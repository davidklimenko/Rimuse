import './App.css'
import react from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Navbar from "./components/NavBar/NavBar"
import Catalog from "./components/Catalog/Catalog"
import Playlist from './components/Catalog/Playlist/Playlist'
import Player from "./components/Player/Player"
import Favorites from "./components/Favorites/Favorites"

export default function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
          <Route path="/" render={() => <Playlist/>}>
              
          </Route>
          <Route path="/favorites" render={() => <Favorites/>}>
              
          </Route>
          <Route path="/catalog" render={() => <Catalog/>}>
              
          </Route>
      <Player/>
      <Catalog/>
    </BrowserRouter>
    
  );
}



import './App.css'
import {
  BrowserRouter,
  Route,
  Redirect
} from "react-router-dom"
import {Provider} from 'react-redux'
import store from './redux/store'

import NavBar from "./components/NavBar/NavBar"
import Catalog from "./components/Catalog/Catalog"
import Playlist from './components/Catalog/Playlist/Playlist'
import Player from "./components/Player/Player"

export default function App() {

const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=&response_type=code&redirect_uri=http://localhost:3000&scope='








  return (
    <Provider store={store}> 
      <BrowserRouter>
        <div className="wrapper">
          <div className="container">
            <NavBar/>
            <div className="content">
              <div className="main">
                <Route path="/playlist/:id" component={Playlist}/>
                <Route path="*" exact component={Playlist}>
                  <Redirect to="/playlist/main" />
                </Route>
              </div>  
              <Player/>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}



import './App.css'
import react from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Nav from "./components/NavBar/NavBar"

export default function App() {
  return (
    <BrowserRouter>
      <Nav></Nav>

      <Switch>
          <Route path="/">
              
          </Route>

      </Switch>
    </BrowserRouter>
  );
}



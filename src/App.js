import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./pages/Home/Home"
import Header from './components/Header/Header'
import Login from './pages/Login/Login'
import { useEffect } from 'react'
import { auth } from './firebase'
import { useDispatch } from 'react-redux'
import { setuser } from './Redux/actions/Actions'
import Checkout from './pages/CheckOut/Checkout'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setuser(authUser))
      } else {
        dispatch(setuser(null))
      }
    })
  }, [])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Header />
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App

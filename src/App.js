// https://stackoverflow.com/questions/39513753/my-redux-state-has-changed-why-doesnt-react-trigger-a-re-render
import {  Routes, Route } from "react-router-dom"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home"
import './index.css'
import CartContext from './components/context/CartContext';
import {useReducer, useState } from "react"
import Cart from "./pages/Cart"
import AuthState from "./components/context/AuthState"
import {onAuthStateChanged} from "firebase/auth"
import authfn from "./firebase/Auth"
import {Navigate} from "react-router-dom"

function init() {
  return []
}

const reducer = (cart, action) => {
  switch (action.type) {
    case "add":
      var newItem = [...cart, action.payload]
      return newItem
    case "remove":
      var filteredItem=cart.filter((item)=>{
        return item.name !== action.payload
      })
      console.log(filteredItem);
      return filteredItem

    default:

  }
}

export default function App() {
  const [carts, dispatch] = useReducer(reducer, init())
  const [user,setUser]=useState()
  function checkAuth(){
    onAuthStateChanged(authfn.auth, (user) => {
      if (user) {
        setUser(user)

      }
    });
  }
  checkAuth()
  return (
    <AuthState.Provider value={{checkAuth,user}}>
      <CartContext.Provider value={{ carts, dispatch }}>
      <div>

          <Routes>
            <Route path="cart" element={<Cart />} />
            <Route path='login' element={user ? <Navigate to="/" replace /> :<SignIn />} />
            <Route path='signup' element={user ? <Navigate to="/" replace /> : <SignUp />} />
            <Route path="/" element={<Home />} />
          </Routes>

      </div>
    </CartContext.Provider>
    </AuthState.Provider>
  )
}



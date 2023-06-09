import React, { useState, useEffect } from 'react'
import AuthorList from './author/AuthorList'
import Signup from './user/Signup'
import Signin from './user/Signin'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Axios from 'axios'
import jwt_decode from "jwt-decode"

export default function App() {

  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState({})

  useEffect(() => {
    let token = localStorage.getItem("token")
    if(token != null){
      let user = jwt_decode(token)

      if(user){
        setIsAuth(true)
        setUser(user)
      }
      else if(!user){
        localStorage.removeItem("token")
        setIsAuth(false)
      }
    }
  }, [])
   

  const registerHandler = (user) =>{
    Axios.post("auth/signup", user)
    .then(res =>{
      console.log(res)
    })
    .catch(err =>{
      console.log(err)
    })
  }

  const loginHandler = (cred) =>{
    Axios.post("auth/signin", cred)
    .then(res =>{
      console.log(res.data.token)
      // Save the token into Local Storage
      let token = res.data.token
      if(token != null){
        localStorage.setItem("token", token)
        let user = jwt_decode(token);
        setIsAuth(true)
        setUser(user)
      }
    })
    .catch(err =>{
      console.log(err)
      setIsAuth(false)
    })
  }

  const onLogoutHnadler = (e) =>{
    e.preventDefault()
    localStorage.removeItem("token")
    setIsAuth(false)
    setUser(null)
  }

  
  return (    <div>
      <Router>
        <div>
          <nav>
            <div>
              <Link to="/">Home</Link> &nbsp;
              <Link to="/signup">Signup</Link> &nbsp;
              <Link to="/signin">Signin</Link> &nbsp;
              <Link to="/logout" onClick={onLogoutHnadler}>Logout</Link> &nbsp;
            </div>
          </nav>
        </div>

        <div>
          <Routes>


            {/* Check if the user is logged in */}
            <Route path='/' element={isAuth ? <AuthorList /> : <Signin login={loginHandler}/>}></Route>

            <Route path='/signup' element={<Signup register={registerHandler}/>}></Route>
            <Route path='/signin' element={isAuth ? <AuthorList /> : <Signin login={loginHandler}/>}></Route>
          </Routes>
        </div>

      </Router>
    </div>

  )
}

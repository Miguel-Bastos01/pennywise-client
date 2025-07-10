import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { response } from "express";

function Login () {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    api.post('/auth/login', {email, password})
      .then((response) => {
        localStorage.setItem("authToken", response.data.authToken)
        navigate("/home")
      })
      .catch((err) => {
        setError("Incorrect email or password")
      })
    
  return (
    <div
     className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-4"
     style={{
      backgroundImage:  "url('/images/Login-background.jpg')"
     }}
    ></div>
  )

  }
}

export default Login
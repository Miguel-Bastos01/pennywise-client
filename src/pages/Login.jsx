import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        
         api.post("/auth/login", {email, password})
         .then((res) => {
            const token = res.data.authToken
            localStorage.setItem("authToken", token)
            navigate("/home")
         })
         .catch((err) => {
            setErrorMessage(err.response?.data?.message || "Could not login please try again later")
         })
    }
    return(
        <form onSubmit={handleLogin} className="max-w-sm mx-auto">
            <h2 className="text-lg font-semibold mb-4">Login</h2>

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border px-3 py-2 mb-2"/>

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border px-3 py-2 mb-2"/>

              <button type="submit" className="w-full bg-black text-white py-2 rounded">
                Login
              </button>

              {errorMessage && (
                <p className="text-red-500 mt-2 text-sm">{errorMessage}</p>
              )}
        </form>
    )
}

export default Login
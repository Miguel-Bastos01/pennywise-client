import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import logo from "../../public/Pennywise-logo.png";

function Signup(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")

    const navigate = useNavigate()

    const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    api
      .post("/auth/signup", { name, email, password })
      .then((response) => {
        localStorage.setItem("authToken", response.data.authToken);
        localStorage.setItem("userName", name); 
        navigate("/home");
      })
      .catch(() => {
        setError("Something went wrong. Please try again.");
      });
  };

    return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-6"
      style={{
        backgroundImage: "url('/Login-background.png')",
      }}
    >
      <div className="bg-white bg-opacity-90 text-black rounded-xl shadow-xl ring-4 ring-white/40 hover:ring-white/60 transition-all duration-300 px-8 py-10 w-full max-w-md">
        
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="Pennywise Logo" className="w-20 mb-2" />
          <h2 className="text-2xl font-bold text-center">Welcome to Pennywise</h2>
          <p className="text-sm text-center text-gray-600 mt-1">
            <em>Hi! I'm <strong>Pennywise the Penny</strong> 💰<br />
            Ready to <span className="text-[#00FFC2]">Track</span>, <span className="text-[#FFD700]">Save</span>, and <span className="text-[#FFA07A]">Thrive</span>?</em>
          </p>
        </div>

        
        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        
        <form onSubmit={handleSignup} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFA07A]"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00FFC2]"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-[#FFA07A] to-[#FFD700] text-black font-semibold py-2 rounded-md hover:scale-105 transition-all duration-200"
          >
            Sign Up
          </button>
        </form>

        
        <div className="text-center mt-4 text-sm text-gray-700">
          Already have an account?{" "}
          <span
            className="text-[#00FFC2] font-medium cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            Log in
          </span>
        </div>
        
        <br />
        <footer className="text-sm mb-4 text-center">
           Created by Miguel Bastos
          <br />
          © {new Date(2025, 7, 10).getFullYear()} Pennywise Finance Pal
           </footer>


      </div>
    </div>
  );
}


export default Signup
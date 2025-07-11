import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import logo from "../../public/Pennywise-logo.png";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    api.post("/auth/login", { email, password })
      .then((response) => {
        localStorage.setItem("authToken", response.data.authToken);
        navigate("/dashboard");
      })
      .catch((err) => {
        setError("Incorrect email or password");
      });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-4 border"
      style={{
        backgroundImage: "url('/Login-background.png')",
      }}>
        <div className="bg-white bg-opacity-90 text-black rounded-xl shadow-xl ring-4 ring-white/40 hover:ring-white/60 transition-all duration-300 px-8 py-10 w-full max-w-md">
        
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="Pennywise Logo" className="w-20 mb-2" />
          <h2 className="text-2xl font-bold text-center">Welcome Back</h2>
          <p className="text-sm text-center text-gray-600">
            Login to continue tracking your budget
          </p>
        </div>

       
        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        
        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
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

          <button
            type="submit"
            className="bg-gradient-to-r from-[#00FFC2] to-[#FFD700] text-black font-semibold py-2 rounded-md hover:scale-105 transition-all duration-200"
          >
            Login
          </button>
        </form>

        
        <div className="text-center mt-4 text-sm text-gray-700">
          Don’t have an account?{" "}
          <span
            className="text-[#FFA07A] font-medium cursor-pointer hover:underline"
            onClick={() => navigate("/signup")}
          >
            Sign up
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

export default Login;


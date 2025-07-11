import { useNavigate } from "react-router-dom";
import logo from "../../public/Pennywise-logo.png";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-6"
      style={{ backgroundImage: "url('/Login-background.png')" }}
    >
      <div className="bg-white bg-opacity-90 text-black rounded-xl shadow-xl ring-4 ring-white/40 hover:ring-white/60 transition-all duration-300 px-8 py-10 w-full max-w-md text-center">
        <img src={logo} alt="Pennywise Logo" className="w-20 mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-2">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-6">
          Looks like you wandered off your budget! This page doesn’t exist.
        </p>
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-gradient-to-r from-[#00FFC2] to-[#FFD700] text-black font-semibold py-2 px-4 rounded-md hover:scale-105 transition-all duration-200"
        >
          ← Back to Dashboard
        </button>
      </div>
    </div>
  );
}

export default NotFound;

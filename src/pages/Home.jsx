import { useNavigate } from "react-router-dom";
import logo from "../../public/Pennywise-logo.png";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-between items-center p-6 text-white"
      style={{
        backgroundImage: "url('/Login-background.png')",
      }}
    >
     
      <div className="flex flex-col items-center mt-12 space-y-3">
            <img
            src={logo}
            alt="Pennywise Logo"
            className="w-24 md:w-32 lg:w-40 drop-shadow-md"/>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
            Pennywise </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-center">
            <span className="text-[#00FFC2]">Track.</span>{" "}
            <span className="text-[#FFD700]">Save.</span>{" "}
            <span className="text-[#FFA07A]">Thrive.</span>
            </p>
            </div>

        
        <div className="flex flex-col md:flex-row gap-4 mt-6">
        <button
            className="bg-gradient-to-r from-[#00FFC2] to-[#FFD700] text-black font-semibold py-2 px-6 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200"
            onClick={() => navigate("/login")}>Login</button>

        <button
            className="bg-gradient-to-r from-[#FFA07A] to-[#FFD700] text-black font-semibold py-2 px-6 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200"
            onClick={() => navigate("/signup")} > Signup</button>
         </div>

        <footer className="text-sm mb-4 text-center">
         Created by Miguel Bastos
        <br />
        © {new Date(2025, 7, 10).getFullYear()} Pennywise Finance Pal
        </footer>
    </div>
  );
}

export default Home;

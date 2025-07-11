import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import logo from "../../public/Pennywise-logo.png";

function Settings() {
  const navigate = useNavigate();
  const [savingsGoal, setSavingsGoal] = useState("");
  const [deleteConfirm, setDeleteConfirm] = useState(false);

  useEffect(() => {
    const savedGoal = localStorage.getItem("savingsGoal");
    if (savedGoal) setSavingsGoal(savedGoal);
  }, []);

  const handleSaveGoal = (e) => {
    e.preventDefault();
    localStorage.setItem("savingsGoal", savingsGoal);
    alert("Savings goal saved!");
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  const handleDeleteAccount = () => {
    if (!deleteConfirm) {
      setDeleteConfirm(true);
      return;
    }

    api
      .delete("/auth/delete-user")
      .then(() => {
        localStorage.clear();
        navigate("/signup");
      })
      .catch((err) => {
        console.error("Delete failed:", err);
        alert("Something went wrong.");
      });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-4"
      style={{ backgroundImage: "url('/Login-background.png')" }}
    >
      <div className="bg-white bg-opacity-90 text-black rounded-xl shadow-xl ring-4 ring-white/40 hover:ring-white/60 transition-all duration-300 px-8 py-10 w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="Pennywise Logo" className="w-20 mb-2" />
          <h2 className="text-2xl font-bold text-center">Settings</h2>
          <p className="text-sm text-center text-gray-600">
            Manage your account and savings goal
          </p>
        </div>

        {/* Savings Goal */}
        <form onSubmit={handleSaveGoal} className="mb-6 space-y-4">
          <label className="block text-gray-700 font-medium">
            Monthly Savings Goal (€)
          </label>
          <input
            type="number"
            value={savingsGoal}
            onChange={(e) => setSavingsGoal(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00FFC2]"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#00FFC2] to-[#FFD700] text-black font-semibold py-2 rounded-md hover:scale-105 transition-all duration-200"
          >
            Save Goal
          </button>
        </form>

        {/* Navigation Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => navigate("/dashboard")}
            className="w-full bg-gray-200 text-black font-semibold py-2 rounded-md hover:bg-gray-300"
          >
            ← Back to Dashboard
          </button>

          <button
            onClick={handleLogout}
            className="w-full bg-red-100 text-red-600 font-semibold py-2 rounded-md hover:bg-red-200"
          >
            Logout
          </button>

          <button
            onClick={handleDeleteAccount}
            className="w-full bg-red-500 text-white font-semibold py-2 rounded-md hover:bg-red-600"
          >
            {deleteConfirm ? "Are you sure? Click again" : "Delete Account"}
          </button>
        </div>

        <footer className="text-sm text-center mt-6 text-gray-700">
          Created by Miguel Bastos <br />
          © {new Date().getFullYear()} Pennywise Finance Pal
        </footer>
      </div>
    </div>
  );
}

export default Settings;

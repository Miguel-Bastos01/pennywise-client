import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiSettings, CiMoneyBill, CiLogout } from "react-icons/ci";
import api from "../services/api";
import logo from "../../public/Pennywise-logo.png";
import PieChartRing from "../components/PieChartRing";

function Dashboard() {
  const navigate = useNavigate();
  const [name, setName] = useState("Friend");
  const [expenses, setExpenses] = useState([]);
  const [expanded, setExpanded] = useState(null);
  const [filter, setFilter] = useState("this-month");
  const [savingsGoal, setSavingsGoal] = useState(2000);

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) setName(storedName);

    const storedGoal = localStorage.getItem("savingsGoal");
    if (storedGoal) setSavingsGoal(parseFloat(storedGoal));

    fetchExpenses();
  }, [filter]);

  const fetchExpenses = () => {
    api
      .get("/expenses", { params: { filter } })
      .then((res) => setExpenses(res.data))
      .catch((err) => console.error("Failed to load expenses:", err));
  };

  const handleSignOut = () => {
    localStorage.clear();
    navigate("/");
  };

  const totalSpent = expenses.reduce((sum, e) => sum + e.amount, 0);
  const available = savingsGoal - totalSpent;

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center text-black px-6 py-4 backdrop-blur-md bg-white/70"
      style={{ backgroundImage: "url('/Dashboard-background.png')" }}
    >
      
      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <img src={logo} alt="Logo" className="w-16" />
        <div className="flex space-x-6 text-center">
          <div
            onClick={() => navigate("/expenses")}
            className="cursor-pointer hover:text-[#00FFC2]"
          >
            <CiMoneyBill size={26} className="mx-auto" />
            <span className="text-sm">Expenses</span>
          </div>
          <div
            onClick={() => navigate("/settings")}
            className="cursor-pointer hover:text-[#FFD700]"
          >
            <CiSettings size={26} className="mx-auto" />
            <span className="text-sm">Settings</span>
          </div>
          <div
            onClick={handleSignOut}
            className="cursor-pointer hover:text-red-500"
          >
            <CiLogout size={26} className="mx-auto" />
            <span className="text-sm">Sign Out</span>
          </div>
        </div>
      </div>

      
      <h2 className="text-2xl font-bold mb-2">Welcome back, {name} 👋</h2>

      
      <div className="flex justify-center gap-4 text-sm mb-4">
        <button
          onClick={() => setFilter("this-month")}
          className={`px-3 py-1 rounded-full ${
            filter === "this-month"
              ? "bg-[#00FFC2] text-black font-semibold"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          This Month
        </button>
        <button
          onClick={() => setFilter("all-time")}
          className={`px-3 py-1 rounded-full ${
            filter === "all-time"
              ? "bg-[#FFD700] text-black font-semibold"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          All Time
        </button>
      </div>

      <div className="w-full max-w-sm mx-auto my-6">
        <PieChartRing spent={totalSpent} goal={savingsGoal} />
      </div>

      
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-bold underline">Expenses</h3>
        <button
          onClick={() => navigate("/expense-form")}
          className="text-sm text-[#00AEEF] hover:underline"
        >
          Create New Expense
        </button>
      </div>

      <div className="space-y-2 mb-4">
        {expenses.slice(0, 4).map((expense) => (
          <div key={expense._id || expense.id}>
            <div
              onClick={() => toggleExpand(expense._id || expense.id)}
              className="flex justify-between items-center cursor-pointer border-b py-1"
            >
              <span>{expense.label}</span>
              <div className="flex items-center space-x-2">
                <span>€{expense.amount}</span>
                <span>{expense.mood}</span>
              </div>
            </div>
            {expanded === (expense._id || expense.id) && (
              <div className="text-sm text-gray-700 pl-2 py-1">
                {expense.details}
              </div>
            )}
          </div>
        ))}
      </div>

      
      <div className="text-center">
        <button
          onClick={() => navigate("/expenses")}
          className="text-sm text-[#00AEEF] hover:underline"
        >
          See All Expenses
        </button>
      </div>
    </div>
  );
}

export default Dashboard;







































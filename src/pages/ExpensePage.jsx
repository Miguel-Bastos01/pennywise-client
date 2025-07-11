import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import logo from "../../public/Pennywise-logo.png";

function ExpensePage() {
  const [expenses, setExpenses] = useState([]);
  const [expanded, setExpanded] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = () => {
   api
  .get("/api/expenses") 
  .then((res) => setExpenses(res.data))
  .catch((err) => console.error("Failed to load expenses:", err));

  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this expense?")) {
      api
        .delete(`/api/expenses/${id}`)
        .then(() => {
          fetchExpenses();
        })
        .catch((err) => console.error("Failed to delete:", err));
    }
  };

  const totalSpent = expenses.reduce((sum, e) => sum + e.amount, 0);

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
        <button
          onClick={() => navigate("/dashboard")}
          className="text-sm text-[#00AEEF] hover:underline"
        >
          ← Back to Dashboard
        </button>
      </div>

      <h2 className="text-2xl font-bold mb-4">All Expenses</h2>

      <div className="text-lg font-semibold mb-4">
        Total Spent: €{totalSpent.toFixed(2)}
      </div>

      <div className="space-y-3">
        {expenses.map((expense) => (
          <div key={expense._id} className="border-b pb-2">
            <div
              onClick={() => toggleExpand(expense._id)}
              className="flex justify-between items-center cursor-pointer"
            >
              <span className="font-medium">{expense.title}</span>
              <div className="flex items-center space-x-3">
                <span>€{expense.amount}</span>
                <span>{expense.mood}</span>
              </div>
            </div>

            {expanded === expense._id && (
              <div className="text-sm text-gray-700 mt-1 space-y-1 pl-2">
                <div>Category: {expense.category}</div>
                {expense.notes && <div>Notes: {expense.notes}</div>}
                <div className="flex gap-3 mt-1">
                  <button
                    onClick={() =>
                      navigate(`/expense-edit/${expense._id}`)
                    }
                    className="text-xs text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(expense._id)}
                    className="text-xs text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpensePage;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function ExpenseForm(){
    const [title, settitle] = useState("")
    const [amount, setamount] = useState("")
    const [mood, setMood] = useState("Feeling okay")
    const [details, setdetails] = useState("")
    const [error, seterror] = useState("")
    const [category, setCategory] = useState("Rent")
    const navigate = useNavigate ()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!label || !amount) {
            seterror (" and amount are required")
            return
        }
    api
      .post("/expenses", {
        label,
        amount: parseFloat(amount),
        mood,
        details,
      })
      .then(() => navigate ("/dashboard"))
      .catch((err) => {
        console.error(err)
        seterror("Failed to create expense")
      })
    }
    return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: "url('/Dashboard-background.png')" }}
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white bg-opacity-90 rounded-lg shadow-xl p-6 space-y-4 backdrop-blur"
      >
        <h2 className="text-2xl font-bold text-center text-black">New Expense</h2>

        {error && <p className="text-red-600 text-sm text-center">{error}</p>}

        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            className="text-black w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-[#00FFC2]"
            placeholder="e.g. Rent"
            required
          />
        </div>

        <div>
        <label className="block text-sm font-medium text-gray-700">Category</label>
        <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="text-black w-full border rounded px-3 py-2 mt-1"
            required
        >
            {[
            'Rent', 'Mortgage', 'Utilities', 'Groceries', 'Transportation', 'Insurance', 'Healthcare',
            'Debt Repayment', 'Phone Bill', 'Internet', 'Streaming Services', 'Software/Apps', 'Gym Membership',
            'Dining Out', 'Takeout/Delivery', 'Coffee', 'Entertainment', 'Shopping', 'Beauty & Grooming',
            'Gaming', 'Hobbies', 'Alcohol', 'Tobacco/Cannabis', 'Gifts', 'Impulse Purchase', 'Education',
            'Childcare', 'Pet Care', 'Travel', 'Home Maintenance', 'Car Maintenance', 'Savings', 'Investment', 'Donations'
            ].map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
            ))}
        </select>
        </div>



        <div>
          <label className="block text-sm font-medium text-gray-700">Amount (€)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setamount(e.target.value)}
            className="text-black w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-[#FFD700]"
            placeholder="e.g. 500"
            required
          />
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700">Mood</label>
            <select
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                className="text-black w-full border rounded px-3 py-2 mt-1"
            >
                <option value="Good day">😊 Good day</option>
                <option value="Feeling okay">😐 Feeling okay</option>
                <option value="Bad day">😞 Bad day</option>
                <option value="Stressed out">😣 Stressed out</option>
                <option value="Angry">😡 Angry</option>
            </select>
            </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Details</label>
          <textarea
            value={details}
            onChange={(e) => setdetails(e.target.value)}
            className="text-black w-full border rounded px-3 py-2 mt-1 resize-none"
            placeholder="Optional notes"
            rows={3}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#FFA07A] text-white font-semibold py-2 rounded hover:bg-[#ff9060] transition"
        >
          Add Expense
        </button>
        <button
          type="button"
          onClick={() => navigate("/dashboard")}
          className="w-full mt-2 border border-[#FFA07A] text-[#FFA07A] font-semibold py-2 rounded hover:bg-[#fff5f0] transition">
             Cancel </button>
      </form>
    </div>
  );
}

export default ExpenseForm;



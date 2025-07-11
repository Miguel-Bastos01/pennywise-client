import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js"
import React from "react";

ChartJS.register(ArcElement, Tooltip, Legend)

function PieChartRing({ spent, goal}) {
    const remaining = goal - spent
    const data = {
        labels: ["Spent", "Available"],
        datasets: [
            {
                data: [spent, Math.max(remaining, 0)],
                backgroundColor: ["#FF6B6B", "#00FFC2"],
                borderWidth: 0,
                cutout: "70%",
            }
        ]
    }
    return (
    <div className="relative w-60 h-60 mx-auto">
      <Doughnut data={data} options={{ cutout: "70%", responsive: true }} />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-xl font-bold text-black">
          €{remaining.toFixed(2)}
        </p>
        <span className="text-sm text-gray-500">left to spend</span>
      </div>
    </div>
  );
}

export default PieChartRing;



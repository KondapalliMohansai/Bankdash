import { motion } from "framer-motion";

const data = [
  35, 55, 45, 70, 48, 85, 65,
  90, 60, 72, 50, 78
];

function ExpenseChart() {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">
          Expense Statistics
        </h3>

        <select className="rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none">
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Yearly</option>
        </select>
      </div>

      <div className="mt-8 flex h-52 items-end gap-2">
        {data.map((height, index) => (
          <motion.div
            key={index}
            initial={{ height: 0 }}
            animate={{ height: `${height}%` }}
            transition={{
              duration: 0.5,
              delay: index * 0.04,
            }}
            className="flex-1 rounded-t-md bg-[#1f3c88] opacity-90"
          />
        ))}
      </div>

      <div className="mt-3 flex justify-between text-xs text-slate-400">
        {[
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ].map((month) => (
          <span key={month}>{month}</span>
        ))}
      </div>
    </div>
  );
}

export default ExpenseChart;
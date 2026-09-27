import { transactions } from "../data/dashboardData";

function RecentTransactions() {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">
          Recent Transactions
        </h3>

        <button className="text-sm text-[#1f3c88]">
          See All
        </button>
      </div>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[600px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-100 text-xs text-slate-400">
              <th className="pb-3">Transaction</th>
              <th className="pb-3">Category</th>
              <th className="pb-3">Date</th>
              <th className="pb-3">Amount</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((transaction) => (
              <tr
                key={transaction.id}
                className="border-b border-slate-50"
              >
                <td className="py-4 font-medium">
                  {transaction.name}
                </td>

                <td className="py-4 text-slate-500">
                  {transaction.category}
                </td>

                <td className="py-4 text-slate-500">
                  {transaction.date}
                </td>

                <td
                  className={`py-4 font-semibold ${
                    transaction.type === "income"
                      ? "text-emerald-500"
                      : "text-red-500"
                  }`}
                >
                  {transaction.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentTransactions;
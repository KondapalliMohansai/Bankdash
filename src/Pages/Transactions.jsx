import RecentTransactions from "../Components/RecentTransactions";

function Transactions() {
  return (
    <div>
      <h1 className="text-2xl font-bold">
        Transactions
      </h1>

      <p className="mt-1 text-sm text-slate-400">
        View and manage your transactions.
      </p>

      <div className="mt-6">
        <RecentTransactions />
      </div>
    </div>
  );
}

export default Transactions;
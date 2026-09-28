import {
  Wallet,
  TrendingUp,
  CreditCard,
  DollarSign,
} from "lucide-react";

import StatCard from "../Components/StatCard";
import BalanceCard from "../Components/BalanceCard";
import ExpenseChart from "../Components/ExpenseChart";
import WeeklyActivity from "../Components/WeeklyActivity";
import QuickTransfer from "../Components/QuickTransfer";
import RecentTransactions from "../Components/RecentTransactions";

function Dashboard() {
  return (
    <div className="space-y-6">

      {/* Statistics */}
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Balance"
          value="$12,750"
          icon={Wallet}
          trend="+2.5% this month"
        />

        <StatCard
          title="Income"
          value="$5,600"
          icon={TrendingUp}
          trend="+5.2% this month"
        />

        <StatCard
          title="Expense"
          value="$3,240"
          icon={CreditCard}
          trend="-1.8% this month"
        />

        <StatCard
          title="Savings"
          value="$2,360"
          icon={DollarSign}
          trend="+4.3% this month"
        />
      </section>

      {/* Balance + Activity */}
      <section className="grid gap-6 xl:grid-cols-2">
        <BalanceCard />
        <WeeklyActivity />
      </section>

      {/* Charts */}
      <section className="grid gap-6 xl:grid-cols-2">
        <ExpenseChart />
        <QuickTransfer />
      </section>

      {/* Transactions */}
      <section>
        <RecentTransactions />
      </section>

    </div>
  );
}

export default Dashboard;
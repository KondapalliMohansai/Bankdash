import {
  Wallet,
  TrendingUp,
  CreditCard,
  DollarSign,
} from "lucide-react";

import StatCard from "../components/StatCard";
import BalanceCard from "../components/BalanceCard";
import ExpenseChart from "../components/ExpenseChart";
import WeeklyActivity from "../components/WeeklyActivity";
import QuickTransfer from "../components/QuickTransfer";
import RecentTransactions from "../components/RecentTransactions";

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
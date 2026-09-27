import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ArrowLeftRight,
  WalletCards,
  TrendingUp,
  CreditCard,
  Landmark,
  Settings,
  Wrench,
  X,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Transactions",
    path: "/transactions",
    icon: ArrowLeftRight,
  },
  {
    name: "Accounts",
    path: "/accounts",
    icon: WalletCards,
  },
  {
    name: "Investments",
    path: "/investments",
    icon: TrendingUp,
  },
  {
    name: "Credit Cards",
    path: "/credit-cards",
    icon: CreditCard,
  },
  {
    name: "Loans",
    path: "/loans",
    icon: Landmark,
  },
  {
    name: "Services",
    path: "/services",
    icon: Wrench,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

function Sidebar({ open, setOpen }) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`
          fixed left-0 top-0 z-50
          flex h-screen w-64 flex-col
          bg-white border-r border-slate-200
          transition-transform duration-300
          lg:translate-x-0
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex h-20 items-center justify-between px-6">
          <h1 className="text-2xl font-bold text-[#1f3c88]">
            Bank<span className="text-[#35b6a4]">Dash.</span>
          </h1>

          <button
            className="lg:hidden"
            onClick={() => setOpen(false)}
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex-1 px-4 py-4">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `
                  mb-2 flex items-center gap-4 rounded-xl px-4 py-3
                  text-sm font-medium transition
                  ${
                    isActive
                      ? "bg-[#eaf4ff] text-[#1f3c88]"
                      : "text-slate-500 hover:bg-slate-50"
                  }
                  `
                }
              >
                <Icon size={20} />
                {item.name}
              </NavLink>
            );
          })}
        </nav>

        <div className="m-4 rounded-2xl bg-[#f4f7fc] p-4">
          <p className="text-xs text-slate-500">
            Need help?
          </p>

          <p className="mt-1 text-sm font-semibold">
            Contact support
          </p>

          <button className="mt-3 w-full rounded-lg bg-[#1f3c88] py-2 text-sm text-white">
            Get Help
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
import { Menu, Search, Bell, Settings } from "lucide-react";

function Header({ setSidebarOpen }) {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-4">
        <button
          className="lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu size={24} />
        </button>

        <div>
          <h2 className="text-xl font-semibold text-[#1b2559]">
            Dashboard
          </h2>

          <p className="hidden text-xs text-slate-400 sm:block">
            Welcome back!
          </p>
        </div>
      </div>

      <div className="hidden w-72 items-center rounded-full bg-[#f5f7fb] px-4 py-2 md:flex">
        <Search size={18} className="text-slate-400" />

        <input
          type="text"
          placeholder="Search for something"
          className="ml-2 w-full bg-transparent text-sm outline-none"
        />
      </div>

      <div className="flex items-center gap-3">
        <button className="hidden rounded-full bg-[#f5f7fb] p-3 sm:block">
          <Settings size={18} />
        </button>

        <button className="relative rounded-full bg-[#f5f7fb] p-3">
          <Bell size={18} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <img
          src="https://i.pravatar.cc/100?img=12"
          alt="Profile"
          className="h-10 w-10 rounded-full object-cover"
        />
      </div>
    </header>
  );
}

export default Header;
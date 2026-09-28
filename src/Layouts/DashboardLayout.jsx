// import { useState } from "react";
// import { Outlet } from "react-router-dom";

// import Sidebar from "..src/components/Sidebar";
// import Header from "..src/components/Header";

// function DashboardLayout() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-[#f5f7fb]">
//       <Sidebar
//         open={sidebarOpen}
//         setOpen={setSidebarOpen}
//       />

//       <div className="lg:pl-64">
//         <Header setSidebarOpen={setSidebarOpen} />

//         <main className="p-4 sm:p-6 lg:p-8">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// }

// export default DashboardLayout;

import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";

function DashboardLayout() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Header />

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
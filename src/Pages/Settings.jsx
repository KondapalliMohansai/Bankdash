import { useState } from "react";

function Settings() {
  const [notifications, setNotifications] = useState(true);

  return (
    <div>
      <h1 className="text-2xl font-bold">
        Settings
      </h1>

      <div className="mt-6 max-w-2xl rounded-2xl bg-white p-6 shadow-sm">
        <h3 className="font-semibold">
          Account Settings
        </h3>

        <label className="mt-6 flex items-center justify-between">
          <span>Enable notifications</span>

          <input
            type="checkbox"
            checked={notifications}
            onChange={() =>
              setNotifications(!notifications)
            }
            className="h-5 w-5"
          />
        </label>

        <button className="mt-6 rounded-xl bg-[#1f3c88] px-5 py-3 text-sm text-white">
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default Settings;
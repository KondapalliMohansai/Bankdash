import { useState } from "react";

function QuickTransfer() {
  const [amount, setAmount] = useState("");

  const users = [
    {
      name: "John",
      image: "https://i.pravatar.cc/100?img=11",
    },
    {
      name: "William",
      image: "https://i.pravatar.cc/100?img=12",
    },
    {
      name: "Ann",
      image: "https://i.pravatar.cc/100?img=13",
    },
  ];

  const handleTransfer = () => {
    if (!amount) {
      alert("Please enter an amount");
      return;
    }

    alert(`Transfer of $${amount} initiated`);
    setAmount("");
  };

  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <h3 className="font-semibold">
        Quick Transfer
      </h3>

      <div className="mt-5 flex gap-4 overflow-x-auto pb-2">
        {users.map((user) => (
          <button
            key={user.name}
            className="min-w-20 text-center"
          >
            <img
              src={user.image}
              alt={user.name}
              className="mx-auto h-12 w-12 rounded-full"
            />

            <p className="mt-2 text-xs">
              {user.name}
            </p>
          </button>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-2">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          className="min-w-0 flex-1 rounded-xl bg-slate-50 px-4 py-3 text-sm outline-none"
        />

        <button
          onClick={handleTransfer}
          className="rounded-xl bg-[#1f3c88] px-5 py-3 text-sm font-medium text-white"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default QuickTransfer;
function WeeklyActivity() {
  const data = [
    {
      day: "Sat",
      deposit: 450,
      withdraw: 300,
    },
    {
      day: "Sun",
      deposit: 600,
      withdraw: 420,
    },
    {
      day: "Mon",
      deposit: 500,
      withdraw: 250,
    },
    {
      day: "Tue",
      deposit: 700,
      withdraw: 350,
    },
    {
      day: "Wed",
      deposit: 450,
      withdraw: 280,
    },
    {
      day: "Thu",
      deposit: 650,
      withdraw: 420,
    },
    {
      day: "Fri",
      deposit: 550,
      withdraw: 300,
    },
  ];

  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">
          Weekly Activity
        </h3>

        <div className="flex gap-4 text-xs">
          <span>● Deposit</span>
          <span>● Withdraw</span>
        </div>
      </div>

      <div className="mt-8 flex h-52 items-end justify-between gap-3">
        {data.map((item) => (
          <div
            key={item.day}
            className="flex h-full flex-1 items-end justify-center gap-1"
          >
            <div
              style={{
                height: `${item.deposit / 8}%`,
              }}
              className="w-3 rounded-t-md bg-[#1f3c88]"
            />

            <div
              style={{
                height: `${item.withdraw / 8}%`,
              }}
              className="w-3 rounded-t-md bg-[#35b6a4]"
            />
          </div>
        ))}
      </div>

      <div className="mt-3 flex justify-between text-xs text-slate-400">
        {data.map((item) => (
          <span key={item.day}>{item.day}</span>
        ))}
      </div>
    </div>
  );
}

export default WeeklyActivity;
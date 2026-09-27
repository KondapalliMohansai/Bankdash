function BalanceCard() {
  return (
    <div className="overflow-hidden rounded-2xl bg-[#1f3c88] text-white shadow-sm">
      <div className="flex items-start justify-between p-6">
        <div>
          <p className="text-sm text-white/70">
            My Balance
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            $12,750
          </h2>
        </div>

        <div className="rounded-lg bg-white/10 px-3 py-2">
          VISA
        </div>
      </div>

      <div className="grid grid-cols-2 border-t border-white/10 px-6 py-5">
        <div>
          <p className="text-xs text-white/60">
            Card Holder
          </p>

          <p className="mt-1 font-medium">
            Eddy Cusuma
          </p>
        </div>

        <div>
          <p className="text-xs text-white/60">
            Valid Thru
          </p>

          <p className="mt-1 font-medium">
            12/22
          </p>
        </div>
      </div>
    </div>
  );
}

export default BalanceCard;
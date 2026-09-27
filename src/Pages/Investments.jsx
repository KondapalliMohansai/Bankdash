function Investments() {
  return (
    <Page
      title="Investments"
      description="Track your investments and portfolio."
    />
  );
}

function Page({ title, description }) {
  return (
    <div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="mt-1 text-slate-400">{description}</p>

      <div className="mt-6 rounded-2xl bg-white p-8 shadow-sm">
        Investment data will appear here.
      </div>
    </div>
  );
}

export default Investments;
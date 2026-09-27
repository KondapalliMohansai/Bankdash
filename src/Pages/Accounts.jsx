function Accounts() {
  return (
    <Page
      title="Accounts"
      description="Manage your bank accounts and balances."
    />
  );
}

function Page({ title, description }) {
  return (
    <div>
      <h1 className="text-2xl font-bold">
        {title}
      </h1>

      <p className="mt-1 text-slate-400">
        {description}
      </p>

      <div className="mt-6 rounded-2xl bg-white p-8 shadow-sm">
        <p className="text-slate-500">
          Account information will appear here.
        </p>
      </div>
    </div>
  );
}

export default Accounts;
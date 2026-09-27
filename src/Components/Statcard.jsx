import { motion } from "framer-motion";

function StatCard({ title, value, icon: Icon, trend }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-2xl bg-white p-5 shadow-sm"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">
            {title}
          </p>

          <h3 className="mt-2 text-2xl font-bold text-[#1b2559]">
            {value}
          </h3>

          <p className="mt-2 text-xs text-emerald-500">
            {trend}
          </p>
        </div>

        <div className="rounded-full bg-[#eaf4ff] p-4 text-[#1f3c88]">
          <Icon size={23} />
        </div>
      </div>
    </motion.div>
  );
}

export default StatCard;
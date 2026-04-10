"use client";

import { motion } from "framer-motion";

type CardProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export function Card({ title, children, className = "" }: CardProps) {
  return (
    <motion.section
      whileHover={{
        y: -1,
        boxShadow: "0 10px 28px -6px rgba(20, 27, 43, 0.1)",
        transition: { duration: 0.18 },
      }}
      whileTap={{ scale: 0.995 }}
      className={`surface rounded-xl border border-slate-200/90 p-4 shadow-[0_1px_2px_rgba(15,23,42,0.06)] transition-shadow ${className}`}
    >
      {title ? <h3 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-gray-400">{title}</h3> : null}
      {children}
    </motion.section>
  );
}

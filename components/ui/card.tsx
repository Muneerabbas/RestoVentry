"use client";

import { motion } from "framer-motion";

type CardProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
};

export function Card({ title, children, className = "", glow = false }: CardProps) {
  return (
    <motion.section
      whileHover={{ y: -2, scale: 1.003, transition: { duration: 0.2, ease: "easeOut" } }}
      className={`glass-surface rounded-3xl border border-white/10 p-5 md:p-6 shadow-[0_14px_44px_rgba(0,0,0,0.38)] transition-all duration-300 hover:border-white/15 hover:shadow-[0_20px_58px_rgba(0,0,0,0.46)] ${glow ? "soft-glow" : ""} ${className}`}
    >
      {title ? <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.13em] text-gray-500">{title}</h3> : null}
      {children}
    </motion.section>
  );
}

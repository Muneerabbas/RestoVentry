"use client";

import { Mic } from "lucide-react";

export function VoiceFab() {
  return (
    <button
      aria-label="Voice input"
      className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#F59E0B] text-white shadow-2xl transition hover:scale-110"
    >
      <Mic className="h-5 w-5" />
    </button>
  );
}

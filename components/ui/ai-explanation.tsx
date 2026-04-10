type AiExplanationProps = {
  children: React.ReactNode;
};

export function AiExplanation({ children }: AiExplanationProps) {
  return (
    <details className="group">
      <summary className="cursor-pointer list-none text-xs font-medium text-[#3B82F6]">Why?</summary>
      <p className="mt-2 text-sm leading-6 text-gray-300">{children}</p>
    </details>
  );
}

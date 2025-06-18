import { MouseEventHandler } from "react";

export default function YearButton({
  year,
  currentYear,
  onClick,
}: {
  year: number;
  currentYear: number | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg text-center px-2 py-2 border border-green-300 dark:hover:border-zinc-700 hover:border-zinc-200 duration-100 text-sm font-medium ${
        year === currentYear
          ? "dark:bg-emerald-800 border dark:border-zinc-500 border-zinc-200 dark:hover:border-transparent dark:text-amber-50 text-white hover:border-transparent"
          : "dark:bg-black bg-zinc-50 dark:text-white text-zinc-800"
      }`}
      title={`View Graph for the year ${year}`}
    >
      {year}
    </button>
  );
}

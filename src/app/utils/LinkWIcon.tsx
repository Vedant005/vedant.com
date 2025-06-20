import Link from "next/link";

function LinkWithIcon({
  icon,
  label,
  link,
}: {
  icon: React.ReactNode;
  label: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      className="flex items-center gap-1 px-2 py-1 bg-[#1a1a1a] rounded hover:bg-[#262626] transition hover:text-emerald-400"
    >
      <span className="text-sm">{icon}</span>
      <span>{label}</span>
    </Link>
  );
}

export default LinkWithIcon;

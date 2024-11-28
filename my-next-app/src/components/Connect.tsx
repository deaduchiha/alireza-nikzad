import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Connect = ({
  icon,
  label,
  href,
  url,
}: {
  icon: string;
  label: string;
  href: string;
  url: string;
}) => {
  return (
    <Button asChild variant={"unstyled"}>
      <Link
        href={href}
        className="px-4 py-7 rounded-lg flex hover:bg-[#262525] justify-between items-center"
      >
        <div className="flex items-center gap-5">
          <div className="relative w-7 h-7">
            <Image src={icon} alt={label} fill />
          </div>

          <h3>{label}</h3>
        </div>

        <span className="text-paragraph">{url}</span>
      </Link>
    </Button>
  );
};

export default Connect;

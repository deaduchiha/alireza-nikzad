import Image from "next/image";
import { ReactNode } from "react";

const Experience = ({
  icon,
  company,
  job,
  history,
}: {
  icon: string;
  company: string;
  job: string;
  history: string;
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="relative w-7 h-7">
          <Image src={icon} alt={company} fill />
        </div>

        <h3>{company}</h3>
      </div>
      <div className="space-x-3 text-paragraph">
        <span>{job}</span>
        <span className="hidden sm:inline-block">/</span>
        <span className="hidden sm:inline-block">{history}</span>
      </div>
    </div>
  );
};

export default Experience;

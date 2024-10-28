import { ReactNode } from "react";

const Section = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-[#F8F8F8] h-screen">
      <div className="container p-6 h-full mx-auto border-r border-[#252525] overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default Section;

"use client";
import Link from "next/link";

const PAGES = [
  { id: "pam", label: "About", link: "/about" },
  { id: "pp", label: "Projects", link: "/projects" },
  { id: "pw", label: "Works", link: "/works" },
];

const Header = () => {
  return (
    <header className="border-b py-8 ">
      <div className="container mx-auto flex justify-center sm:justify-between">
        <h1 className="hidden sm:block">Alireza Nikzad</h1>

        <a className="hidden sm:inline-block" href="tel:+989904100416">
          +98 990 410 0416
        </a>
      </div>
    </header>
  );
};

export default Header;

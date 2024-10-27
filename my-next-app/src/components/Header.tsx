"use client";
import Link from "next/link";

const PAGES = [
  { id: "pam", label: "about me", link: "/about" },
  { id: "pp", label: "projects", link: "/projects" },
  { id: "pw", label: "works", link: "/works" },
];

const Header = () => {
  return (
    <header className="border-b py-8 flex justify-around">
      <h1>Alireza Nikzad</h1>
      <div className="flex gap-8">
        {PAGES.map(({ id, label, link }) => (
          <Link href={link} key={id}>
            {label}
          </Link>
        ))}
      </div>
      <a href="tel:+989904100416">+98 990 410 0416</a>
    </header>
  );
};

export default Header;

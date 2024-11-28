import Connect from "@/components/Connect";
import Experience from "@/components/Experience";
import Project from "@/components/Project";
import {
  BIOGRAPHY,
  CONNECTIONS,
  EXPERIENCES,
  PROJECTS,
} from "@/constants/data";

export default function Home() {
  return (
    <div className="container mx-auto max-w-4xl sm:px-0 px-4">
      <div className="mt-20 sm:mt-40">
        <h1 className="text-5xl">Alireza Nikzad</h1>
        <p className="text-paragraph text-justify mt-4">{BIOGRAPHY}</p>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl">experience</h2>
        <div className="mt-8 grid gap-5">
          {EXPERIENCES.map(({ company, history, icon, job }, i) => (
            <Experience
              company={company}
              history={history}
              icon={icon}
              job={job}
              key={i}
            />
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl">projects</h2>
        <div className="mt-8 grid gap-7">
          {PROJECTS.map(({ name, description }, i) => (
            <Project name={name} description={description} key={i} />
          ))}
        </div>
      </div>

      <div className="my-16 ">
        <h2 className="text-2xl">connect</h2>
        <div className="mt-8 grid gap-3">
          {CONNECTIONS.map(({ href, icon, label, url }, i) => (
            <Connect key={i} url={url} href={href} icon={icon} label={label} />
          ))}
        </div>
      </div>
    </div>
  );
}

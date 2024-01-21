import InfoCard from "./parts/InfoCard";
import WorkCard from "./parts/WorkCard";

export default function Information() {
  return (
    <>
      {data.map((d) => (
        <InfoCard key={d.id} t={d.title} d={d.description} />
      ))}
      <WorkCard />
    </>
  );
}

const data = [
  {
    id: 1,
    title: "Who i am",
    description:
      "I'm website developer who likes to try new technologies and\
    create dynamic websites using backend and front end tools.",
  },
  {
    id: 2,
    title: "Education",
    description:
      "I study computer engineering at Islamic Azad University Sari branch",
  },
  {
    id: 3,
    title: "Experiences",
    description: "Ajax, Jquery, React, NextJS, NodeJS, Express, Mongodb",
  },
];

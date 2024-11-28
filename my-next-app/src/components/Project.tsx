const Project = ({
  name,
  description,
}: {
  name: string;
  description: string;
}) => {
  return (
    <div className="flex items-start flex-col gap-1">
      <h2 className="text-lg">{name}</h2>
      <p className="text-paragraph line-clamp-1">{description}</p>
    </div>
  );
};

export default Project;

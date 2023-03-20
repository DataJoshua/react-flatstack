import { useState } from "react";
import TableRow from "../molecules/TableRow";
import Table from "../organisms/Table";

const Index = () => {
  // emulate a response from API of a json of projects
  const [projects] = useState([
    {
      id: 1,
      title: "My first project",
      description: "testing propuse",
      createdAt: Date.now(),
    },
    {
      id: 2,
      title: "My second project",
      description: "testing propuse",
      createdAt: Date.now(),
    },
    {
      id: 3,
      title: "My third project",
      description: "testing propuse",
      createdAt: Date.now(),
    },
    {
      id: 4,
      title: "My fourt project",
      description: "testing propuse",
      createdAt: Date.now(),
    },
  ]);

  return (
    <Table title="Projects">
      {projects?.map((val) => (
        <TableRow
          key={val.id}
          title={val.title}
          description={val.description}
          createdAt={val.createdAt}
          primary={val.id % 2 === 0 && true}
        />
      ))}
    </Table>
  );
};

export default Index;

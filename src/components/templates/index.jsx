import { useState } from "react";
import TableRow from "../molecules/TableRow";
import Table from "../organisms/Table";

const Index = () => {
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
    {
      id: 5,
      title: "My fourt project",
      description: "testing propuse",
      createdAt: Date.now(),
    },
    {
      id: 6,
      title: "My fourt project",
      description: "testing propuse",
      createdAt: Date.now(),
    },
    {
      id: 7,
      title: "My fourt project",
      description: "testing propuse",
      createdAt: Date.now(),
    },
    {
      id: 8,
      title: "My fourt project",
      description: "testing propuse",
      createdAt: Date.now(),
    },
    {
      id: 9,
      title: "My fourt project",
      description: "testing propuse",
      createdAt: Date.now(),
    },
    {
      id: 10,
      title: "My fourt project",
      description: "testing propuse",
      createdAt: Date.now(),
    },
    {
      id: 11,
      title: "My fourt project",
      description: "testing propuse",
      createdAt: Date.now(),
    },
    {
      id: 12,
      title: "My fourt project",
      description: "testing propuse",
      createdAt: Date.now(),
    },
    {
      id: 14,
      title: "My fourt project",
      description: "testing propuse",
      createdAt: Date.now(),
    },
    {
      id: 15,
      title: "My fourt project",
      description: "testing propuse",
      createdAt: Date.now(),
    },
    {
      id: 16,
      title: "My fourt project",
      description: "testing propuse",
      createdAt: Date.now(),
    },
    {
      id: 17,
      title: "My fourt project",
      description: "testing propuse",
      createdAt: Date.now(),
    },
    {
      id: 18,
      title: "My fourt project",
      description: "testing propuse",
      createdAt: Date.now(),
    },
    {
      id: 19,
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

"use client";

import ProjectHeader from "@/app/projects/ProjectHeader";
import Board from "../BoardView";
import List from "../ListView";
import Table from "../TableView";
import Timeline from "../TimelineView";

import ModalNewTask from "@/components/ModalNewTask";
import { useState } from "react";

type Props = {
  params: { id: string };
};

const Project = ({ params }: Props) => {
  const { id } = params;
  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  return (
    <div>
      <ModalNewTask
        isOpen={isModalNewTaskOpen}
        onClose={() => setIsModalNewTaskOpen(false)}
        id={id}
      />
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "Board" && (
        <Board id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
      {activeTab === "List" && (
        <List id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
      {activeTab === "Timeline" && (
        <Timeline id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
      {activeTab === "Table" && (
        <Table id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
    </div>
  );
};

export default Project;

// "use client";

// import ProjectHeader from "@/app/projects/ProjectHeader";
// import ModalNewTask from "@/components/ModalNewTask";
// import { useState } from "react";
// import Board from "../BoardView";
// import List from "../ListView";
// import Table from "../TableView";
// import Timeline from "../TimelineView";

// type Props = {
//   params: { id: string };
// };

// const Project = ({ params }: Props) => {
//   const { id } = params;

//   console.log("=== PAGE.TSX DEBUG ===");
//   console.log("params object:", params);
//   console.log("id extracted:", id);
//   console.log("id type:", typeof id);

//   const [activeTab, setActiveTab] = useState("Board");
//   const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

//   return (
//     <div>
//       <ModalNewTask
//         isOpen={isModalNewTaskOpen}
//         onClose={() => setIsModalNewTaskOpen(false)}
//         id={id}
//       />
//       <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
//       {activeTab === "Board" && (
//         <Board id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
//       )}
//       {activeTab === "List" && (
//         <List id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
//       )}
//       {activeTab === "Timeline" && (
//         <Timeline id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
//       )}
//       {activeTab === "Table" && (
//         <Table id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
//       )}
//     </div>
//   );
// };

// export default Project;

import Tree from "react-d3-tree";

const treeData = [
  {
    name: "Top Level",
    attributes: {
      keyA: "valA",
      keyB: "valB",
    },
    children: [
      {
        name: "Level 2: A",
        attributes: {
          keyA: "valA",
          keyB: "valB",
          keyC: "valC",
        },
        children: [{ name: "Son A" }, { name: "Daughter of A" }],
      },
      { name: "Level 2: B" },
      { name: "Level 2: B" },
      { name: "Level 2: B" },
    ],
  },
];

const Structure = () => {
  return (
    <div
    //   id="treeWrapper"
    //   className=""
    //   style={{ width: "50em", height: "20em" }}
      className="w-full mx-aut h-screen p-10"
    >
      <Tree data={treeData} orientation="vertical" />
    </div>
  );
};

export default Structure;

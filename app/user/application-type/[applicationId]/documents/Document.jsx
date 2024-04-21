import { Cancel, document } from "@/svgs";

const Document = ({ name, removeDocument }) => {
  return (
    <div className="flex items-center justify-between border border-gray-200 rounded-md px-2 py-1 w-full">
      <div className="flex items-center gap-2">
        <span className="">{document}</span>
        <span className="text-gray-500 text-sm">{name}</span>
      </div>
      <span className="cursor-pointer" onClick={removeDocument}>
        {Cancel}
      </span>
    </div>
  );
};

export default Document;

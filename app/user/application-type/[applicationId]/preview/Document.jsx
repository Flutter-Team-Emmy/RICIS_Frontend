"use client";
import { document } from "@/svgs";

const Document = ({ documentName }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="">{document}</span>
      <span className="text-gray-400 text-sm">{documentName}</span>
    </div>
  );
};

export default Document;

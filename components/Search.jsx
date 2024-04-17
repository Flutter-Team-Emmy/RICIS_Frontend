import { useState } from "react";
import { SearchIcon } from "@/svgs";

const searchFilters = [
  {
    id: "c1",
    filterKey: "referrence_no",
    name: "Referrence No",
  },
  {
    id: "c2",
    filterKey: "applicant_name",
    name: "Applicant Name",
  },
  {
    id: "c1",
    filterKey: "application_name",
    name: "Application Name",
  },
];

const Search = () => {
  const [searchFilter, setSearchFilter] = useState("referrence_no");
  return (
    <div className="space-y-3">
      <form className="">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <span>{SearchIcon}</span>
          </div>
          <input
            type="search"
            id="search"
            className="rounded-2xl text-gray-700 bg-gray-100 block w-full p-3 ps-10 text-sm text-white-900"
            placeholder="Search"
          />
        </div>
      </form>
      <div className="text-xs flex items-center px-4 gap-4">
        <span className="text-gray-700">Search By: </span>
        {searchFilters.map((filter) => (
          <span
            key={filter.id}
            onClick={() => setSearchFilter(filter.filterKey)}
            className={`border border-gray-400 px-3 py-1 rounded-lg hover:opacity-70 cursor-pointer ${
              filter.filterKey === searchFilter
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-500"
            }`}
          >
            {filter.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Search;

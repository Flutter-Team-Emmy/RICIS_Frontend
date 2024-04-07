import { fileIcon } from "@/svgs";

const statusDetails = [
  {
    header: "Application Type",
    des: "Clearance",
  },
  {
    header: "Comapny Name",
    des: "AJ Gisthing LRD",
  },
  {
    header: "Comapny Name",
    des: "AJ Gisthing LRD",
  },
  {
    header: "Company Union Certificate",
    des: "HIlley Denrine Smawel TJRK G resy 02OT . pdf",
  },
  {
    header: "Application Type",
    des: "Clearance",
  },
  {
    header: "Comapny Name",
    des: "AJ Gisthing LRD",
  },
  {
    header: "Comapny Name",
    des: "AJ Gisthing LRD",
  },
  {
    header: "Company Union Certificate",
    des: "HIlley Denrine Smawel TJRK G resy 02OT . pdf",
  },
  {
    header: "Company Union Certificate",
    des: "HIlley Denrine Smawel TJRK G resy 02OT . pdf",
  },
  {
    header: "Application Type",
    des: "Clearance",
  },
  {
    header: "Application Type",
    des: "Clearance",
  },
  {
    header: "Application Type",
    des: "Clearance",
  },
  {
    header: "Comapny Name",
    des: "AJ Gisthing LRD",
  },
  {
    header: "Comapny Name",
    des: "AJ Gisthing LRD",
  },
  {
    header: "Comapny Name",
    des: "AJ Gisthing LRD",
  },
];

const ApplicationStatus = ({ data, type }) => {
  console.log(data);
  return (
    <div className="space-y-4">
      <span className="font-bold text-[#46B038] pr-4">
        APPLICATION DETAILS:
      </span>
      <span className="text-sm">{data?.application?.reference_id}</span>
      {data?.application?.data?.map((status, index) =>
        status.form_field?.type === "FILE" ? (
          <div key={index} className="space-y-2">
            <h1 className="font-bold">{status.form_field?.name}</h1>
            <p className="text-gray-400 text-sm flex items-center ">
              {" "}
              <span className="mr-2">{fileIcon}</span>{" "}
              {`...${
                status.value.split("/")[7] === undefined
                  ? status.value.split("/")[status.value.split("/").length - 1]
                  : status.value.split("/")[status.value.split("/").length - 1]
              }`}{" "}
              <a
                href={status.value}
                target="_blank"
                className="bg-gray-100 text-300 text-sm rounded-[4px] w-fit ml-6 px-4 py-2 cursor-pointer "
              >
                view
              </a>
            </p>
          </div>
        ) : (
          <div key={index} className="space-y-2">
            <h1 className="font-bold">{status.form_field?.name}</h1>
            <p className="text-gray-400 text-sm">{status.value}</p>
          </div>
        )
      )}
      {/* <button className="text-sm bg-[#46B038] text-white py-2 px-8 w-fit rounded-md hover:opacity-70">
        Next
      </button> */}
    </div>
  );
};

export default ApplicationStatus;

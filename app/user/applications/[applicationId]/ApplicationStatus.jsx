import Link from "next/link";

const ApplicationStatus = ({ data }) => {
  console.log(data);

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <div className="">
          <span className="font-bold text-[#46B038] pr-4">
            APPLICATION DETAILS:
          </span>
          <span className="text-sm">{data?.application?.reference_id}</span>
        </div>
        <p
          className={`py-1.5 rounded-3xl w-fit ${
            data?.application?.transactions?.length === 0
              ? "bg-red-100 text-red-600 px-3"
              : "bg-green-100 text-green-700 px-6"
          } `}
        >
          {data?.application?.transactions?.length === 0 ? "Unpaid" : "Paid"}
        </p>
      </div>
      <div className="space-y-4">
        {data?.application?.data?.map((status, index) => (
          <div key={index} className="space-y-2">
            <h1 className="font-bold">{status.form_field?.name}</h1>
            {typeof status.value === "string" &&
            status?.value.includes("http") ? (
              <Link className="text-gray-400 text-sm" href={status.value}>
                {status.value}
              </Link>
            ) : (
              <p className="text-gray-400 text-sm">
                {new Date(status.value) instanceof Date ? "" : status.value}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationStatus;

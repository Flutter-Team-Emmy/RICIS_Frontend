const columns = [
  "Application Name",
  "Application Type",
  "Company Revenue",
  "Third Party Revenue",
  "Total Revenue",
];

// const
const overviews = [
  {
    id: "k1",
    application_name: "Personnel",
    application_type: "OClearance and Oil Equipment",
    company_revenue: "50,000",
    third_part_revenue: "50,000",
    total_revenue: "50,000",
  },
  {
    id: "k2",
    application_name: "Personnel",
    application_type: "OClearance and Oil Equipment",
    company_revenue: "50,000",
    third_part_revenue: "50,000",
    total_revenue: "50,000",
  },
  {
    id: "k3",
    application_name: "Personnel",
    application_type: "OClearance and Oil Equipment",
    company_revenue: "50,000",
    third_part_revenue: "50,000",
    total_revenue: "50,000",
  },
  {
    id: "k4",
    application_name: "Personnel",
    application_type: "OClearance and Oil Equipment",
    company_revenue: "50,000",
    third_part_revenue: "50,000",
    total_revenue: "50,000",
  },
  {
    id: "k5",
    application_name: "Personnel",
    application_type: "OClearance and Oil Equipment",
    company_revenue: "50,000",
    third_part_revenue: "50,000",
    total_revenue: "50,000",
  },
  {
    id: "k6",
    application_name: "Personnel",
    application_type: "OClearance and Oil Equipment",
    company_revenue: "50,000",
    third_part_revenue: "50,000",
    total_revenue: "50,000",
  },
  {
    id: "k7",
    application_name: "Personnel",
    application_type: "OClearance and Oil Equipment",
    company_revenue: "50,000",
    third_part_revenue: "50,000",
    total_revenue: "50,000",
  },
  {
    id: "k8",
    application_name: "Personnel",
    application_type: "OClearance and Oil Equipment",
    company_revenue: "50,000",
    third_part_revenue: "50,000",
    total_revenue: "50,000",
  },
];

const OverviewTable = () => {
  return (
    <div className="w-full overflow-x-scroll lg:overflow-x-hidden z-[-10] rounded-lg text-xs">
      <table className="w-full text-left rtl:text-right">
        <thead className={`bg-dark-gray text-gray-400 py-4`}>
          <tr className="whitespace-nowrap">
            {columns.map((column, index) => (
              <th key={column} scope="col" className="lg:px-6 px-4 py-3">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="">
          {overviews?.map((overview, index) => {
            // const columns = Object.keys(data);
            return (
              <tr
                // onClick={() => openTransactionInvoice(transaction?.id)}
                key={overview.id}
                className="whitespace-nowrap lg:whitespace-normal bg-white border-b w-full cursor-pointer hover:opacity-70"
              >
                <th
                  scope="row"
                  className="px-6 py-6 font-medium text-gray-900 whitespace-nowrap"
                >
                  {overview.application_name}
                </th>
                <td className="px-6 py-6 w-72">{overview.application_type}</td>
                <td className="px-6 py-6 w-72">{overview.company_revenue}</td>
                <td className="px-6 py-6 w-72">
                  {overview.third_part_revenue}
                </td>
                <td className="px-6 py-6 space-y-1 flex flex-col items-end ">
                  {overview.total_revenue}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OverviewTable;

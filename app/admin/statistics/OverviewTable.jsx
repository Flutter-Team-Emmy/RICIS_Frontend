import TableSkeleton from "@/components/skeleton-loaders/TableSkeleton";
import {
  useGetTransactionsQuery,
  useGetTransactionsStatsQuery,
} from "@/store/api/transactionsApi";
import {
  selectEndDate,
  selectStartDate,
} from "@/store/features/statisticsSlice";
import { useSelector } from "react-redux";

const columns = [
  "Application Name",
  "Application Type",
  "Payment channel",
  "Company Revenue",
  "Government Revenue",
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
    application_type: "Clearance and Oil Equipment",
    company_revenue: "50,000",
    third_part_revenue: "50,000",
    total_revenue: "50,000",
  },
];

const OverviewTable = () => {
  const startDate = useSelector(selectStartDate);
  const endDate = useSelector(selectEndDate);

  const start_date = JSON.parse(startDate);
  const end_date = JSON.parse(endDate);

  const { data, isLoading, isSuccess, error } = useGetTransactionsStatsQuery({
    limit: 20,
    page: 1,
    start_date,
    end_date,
  });

  const stats = data?.data?.transactions?.data;

  console.log({ start_date, end_date });
  console.log(data);

  if (isLoading) return <TableSkeleton />;

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
          {stats?.map((overview, index) => {
            // const columns = Object.keys(data);
            const comapany_revenue =
              overview?.amount * overview?.company_percentage * 100;
            const government_revenue =
              overview?.amount * overview?.third_party_percentage * 100;
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
                  {overview.application.form.name}
                </th>
                <td className="px-6 py-6 w-72">clearance</td>
                <td className="px-6 py-6 w-72">{overview.payment_channel}</td>
                <td className="px-6 py-6 w-72">{comapany_revenue}</td>
                {/* <td className="px-6 py-6 w-72">
                  {overview.third_part_revenue}
                </td> */}
                <td className="px-6 py-6 space-y-1 flex flex-col items-center ">
                  {government_revenue}
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

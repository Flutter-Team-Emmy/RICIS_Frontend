"use client";


const columns = [
  "Date",
  "Time",
  "Action",
  "Application Name",
  "Application Type",
];

// const
const activities = [
  {
    id: "k1",
    date: "20 Sept 2023",
    time: "10:30am",
    action: "Application was rejected",
    application_name: "Personnel",
    application_type: "Clearance",
  },
  {
    id: "k2",
    date: "20 Sept 2023",
    time: "10:30am",
    action: "Application was rejected",
    application_name: "Personnel",
    application_type: "Clearance",
  },
  {
    id: "k3",
    date: "20 Sept 2023",
    time: "10:30am",
    action: "Application was rejected",
    application_name: "Personnel",
    application_type: "Clearance",
  },
  {
    id: "k4",
    date: "20 Sept 2023",
    time: "10:30am",
    action: "Application was rejected",
    application_name: "Personnel",
    application_type: "Clearance",
  },
  {
    id: "k5",
    date: "20 Sept 2023",
    time: "10:30am",
    action: "Application was rejected",
    application_name: "Personnel",
    application_type: "Clearance",
  },
  {
    id: "k6",
    date: "20 Sept 2023",
    time: "10:30am",
    action: "Application was rejected",
    application_name: "Personnel",
    application_type: "Clearance",
  },
  {
    id: "k7",
    date: "20 Sept 2023",
    time: "10:30am",
    action: "Application was rejected",
    application_name: "Personnel",
    application_type: "Clearance",
  },
  {
    id: "k8",
    date: "20 Sept 2023",
    time: "10:30am",
    action: "Application was rejected",
    application_name: "Personnel",
    application_type: "Clearance",
  },
];

const ActivityTable = () => {

//   if (isLoading) return <TableSkeleton />;
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
          {activities?.map((activity, index) => {
            // const columns = Object.keys(data);
            return (
              <tr
                // onClick={() => openTransactionInvoice(transaction?.id)}
                key={activity.id}
                className="whitespace-nowrap lg:whitespace-normal bg-white border-b w-full cursor-pointer hover:opacity-70"
              >
                <th
                  scope="row"
                  className="px-6 py-6 font-medium text-gray-900 whitespace-nowrap"
                >
                  {activity.date}
                </th>
                <td className="px-6 py-6 w-72">{ activity.time}</td>
                <td className="px-6 py-6 w-72">{activity.action}</td>
                <td className="px-6 py-6 w-72">{activity.application_name}</td>
                <td className="px-6 py-6 w-72">{activity.application_type}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ActivityTable;

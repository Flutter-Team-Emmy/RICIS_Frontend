import { ApexCharts } from "@/utils/chartHelpers";
import { useState } from "react";

const selects = ["Day", "Week", "Month", "Year"];

const YearlyTransactionStats = () => {
  const [selected, setSelected] = useState("Year");
  const series = [
    {
      name: "Revenue",
      data: [11, 21, 113, 41, 5, 16, 71, 81, 19, 102, 11, 12],
    },
    // {
    //   name: "Income",
    //   data: [11, 21, 31, 41, 51, 61, 71, 18, 19, 101, 11, 12],
    // },
  ];

  const options = {
    chart: {
      width: 500,
      height: 350,
      type: "area",
      dropShadow: {
        enabled: true,
        top: 3,
        left: 2,
        blur: 4,
        opacity: 0.2,
        color: "#94a3b8",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "months",
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    colors: ["#4A3AFF"],
  };

  const activeClass = "bg-[#1E1B39] text-white rounded-2xl";
  const InactiveClass = "bg-transparent text-gray-400";

  return (
    <div className="bg-white lg:p-6 py-6 px-3 rounded-lg space-y-6 ">
      <div className="rounded-2xl bg-[#F8F8FF] lg:w-fit py-4 px-4 text-gray-400 space-x-4 w-full overflow-x-auto">
        {selects.map((value) => (
          <span
            onClick={() => setSelected(value)}
            className={`${
              selected === value ? activeClass : InactiveClass
            } cursor-pointer py-3 px-6 text-xs whitespace-nowrap`}
          >
            {value}
          </span>
        ))}
      </div>
      <ApexCharts
        options={options}
        series={series}
        type="area"
        width={"100%"}
        height={300}
      />
    </div>
  );
};

export default YearlyTransactionStats;

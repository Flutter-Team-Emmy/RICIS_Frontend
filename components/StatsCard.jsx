import { TrendArrow } from "@/svgs";
import StatChart from "@/Chart";
import { capitalizeFirstLetter } from "@/utils/helpers";
import { ApexCharts } from "@/utils/chartHelpers";

const StatsCard = ({
  status,
  amount,
  percentage,
  dailyStat,
  increase,
  colorCode,
  colorClass,
}) => {
  const series = [
    { name: "dd", data: [2, 24, 19, 33, 15, 90, 20, 50, 80, 67, 9, 44] },
  ];
  const options = {
    chart: {
      group: "sparklines",
      type: "area",
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        top: 3,
        left: 2,
        blur: 4,
        opacity: 1,
        color: "#69CB5C",
      },
    },
    stroke: {
      curve: "straight",
    },
    fill: {
      opacity: 1,
    },
    yaxis: {
      min: 0,
      show: false,
    },
    xaxis: {
      //   type: 'datetime',
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
    colors: ["#69CB5C"],
  };
  return (
    <div className="whitespace-nowrap border-2 border-gray-200 rounded-md bg-white flex-grow">
      <p className="p-4 text-lg font-semibold text-gray-700">
        {capitalizeFirstLetter(status)} Applications
      </p>
      <div className="flex items-end justify-between">
        <div className="px-4 py-2 space-y-2">
          <div className="flex">
            <span className="text-4xl">{amount}</span>
            <span className="text-s text-gray-500 self-end">{`+${increase} today`}</span>
          </div>
          <div className="flex items-end gap-1">
            <span
              className={colorClass}
              style={{
                color: `#${colorCode[0]}`,
              }}
            >
              +{percentage}%
            </span>
            <span className="">{TrendArrow(`#${colorCode[0]}`)}</span>
          </div>
        </div>
        {/* <ApexCharts
          type="Area"
          series={series}
          options={options}
          width={150}
          height={70}
        /> */}
      </div>
    </div>
  );
};

export default StatsCard;

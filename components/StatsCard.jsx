import { TrendArrow } from "@/svgs";
import StatChart from "@/Chart";
import { capitalizeFirstLetter } from "@/utils/helpers";

const StatsCard = ({
  status,
  amount,
  percentage,
  dailyStat,
  increase,
  colorCode,
  colorClass,
}) => {
  console.log(dailyStat, "ddds");
  return (
    <div className="whitespace-nowrap border-2 border-gray-200 rounded-md bg-white flex-grow">
      <p className="p-4 text-xl font-semibold text-gray-700">
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

        <StatChart
          data={{
            amount,
            amount_today: increase,
            dailyStat: dailyStat,
            chart_color: colorCode,
            percentage,
            status,
          }}
        />
      </div>
    </div>
  );
};

export default StatsCard;

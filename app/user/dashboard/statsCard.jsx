import { TrendArrow } from "../../../svgs";
import Image from "next/image";

const StatsCard = ({ status, amount, percentage, increase, colorCode, colorClass }) => {
  return (
    <div className="whitespace-nowrap border-2 border-gray-200 rounded-md bg-white">
      <p className="p-4 text-2xl font-medium text-gray-700">
        {" "}
        {status} Applications
      </p>
      <div className="flex items-end justify-between">
        <div className="px-4 py-2 space-y-2">
          <div className="flex">
            <span className="text-4xl">{amount}</span>
            <span className="text-s text-gray-500 self-end">{`+${increase}today`}</span>
          </div>
          <div className="flex items-end gap-1">
            <span className={colorClass}>+{percentage}%</span>
            <span className="">{TrendArrow(colorCode)}</span>
          </div>
        </div>
        <Image width={230} height={100} className="w-fit" src="/images/graph.png" />
      </div>
    </div>
  );
};

export default StatsCard;

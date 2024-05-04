import Doughnut from "./Doughnut";

const YearlyIncome = () => {
  return (
    <div className="self-center bg-white p-6 pb-12 rounded-lg h-fit">
      <div className="border-b">
        <p className="text-gray-500">Percentage Increase in profit</p>
        <h1 className="text-lg font-semibold">Yearly Income</h1>
      </div>
      <div className="flex justify-center">
        <Doughnut />
      </div>
    </div>
  );
};

export default YearlyIncome;
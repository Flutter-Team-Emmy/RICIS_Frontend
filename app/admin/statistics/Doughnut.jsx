import { ApexCharts } from "@/utils/chartHelpers";

const Doughnut = ({ color, label, percentage, width }) => {
  const series = [60];

  // const options = {
  //   chart: {
  //     height: 350,
  //     type: "radialBar",
  //   },
  //   plotOptions: {
  //     radialBar: {
  //       hollow: {
  //         size: "70%",
  //       },
  //     },
  //   },
  //   labels: ["Cricket"],
  // };

  // };

  const options = {
    chart: {
      dropShadow: {
        enabled: true,
        top: 3,
        left: 2,
        blur: 4,
        opacity: 1,
        color: "#cbd5e1",
        // fontSize: "20px"
      },
    },
    labels: ["Income"],
    legend: {
      show: false,
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontWeight: "700",
            fontSize: "15px",
          },
        },
      },
    },
    colors: ["#4A3AFF"],
  };

  return (
    <ApexCharts
      series={series}
      options={options}
      type="radialBar"
      height={320}
      width={250}
    />
  );
};

export default Doughnut;

import ReactApexChart from "react-apexcharts";

const RadialChart = () => {
  const options = {
    series: [76],
    chart: {
      type: "radialBar",
      offsetY: -0,
      sparkline: {
        enabled: false,
      },
      width: "100%",
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#FFEDD5",
          strokeWidth: "100%",
          margin: 26,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
            offsetY: -0,
            fontSize: "22px",
          },
        },
      },
    },
    grid: {
      padding: {
        top: -15,
      },
    },
    fill: {
      type: "line",
      colors: ["#FB923C"],
    },
  };

  return (
    <div className="w-[220px] h-[100px] relative lg:mx-0 mx-auto">
      <ReactApexChart
        type="radialBar"
        options={options}
        series={options.series}
        height={320}
      />

      {/* Absoulte texts depends on data */}
      <div className="absolute top-16 left-[75px]">
        <h2 className="text-white text-4xl font-medium text-center">6.7</h2>
        <p className="text-white text-base font-medium text-center">Moderate</p>
      </div>
    </div>
  );
};

export default RadialChart;

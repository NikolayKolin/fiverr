import ReactApexChart from "react-apexcharts";

const AreaChart = () => {

  const series = {
    monthDataSeries1: {
      data: [12, 20, 18, 22, 25,22,23,24,25,18,14,12,42,14,14,22,23,26,27,30,31,32,33,24,55], // Replace with your actual price data
      data2: ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24"],
    },
  };
 
  const options2 = {
    series: [
      {
        name: "",
        data: series.monthDataSeries1.data,
        data2: series.monthDataSeries1.data2,
      },
    ],
    chart: {
      containerClass: 'select-none',
      type: "area",
      height: 350,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
      background: {
        // Set the linear gradient background
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: [
            "#C7D2FE",
            "rgba(199, 210, 254, 0.20)",
            "rgba(199, 210, 254, 0.00)",
          ],
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 42.68, 100],
        },
      },
    },
    colors: ["#4338CA"],
    dataLabels: {
      enabled: false,
    },

    stroke: {
      curve: "smooth",
      colors: ["#4338CA"],
    },
    xaxis: {
      selection: {
        enabled: false,
      },
      categories: series.monthDataSeries1.data2,
      tickAmount: 3,
      labels: {
        style: {
          colors: ["#374151"], // Set label color
          fontSize: "14px", // Set label font size
          
        },
        onContextMenu: (event) => {
          event.preventDefault();
        },
        
      },
    },
    yaxis: {
      show: false,
    },
    grid: {
      show: false,
    },
    legend: {
      horizontalAlign: "left",
      marker: {
        fillColors: ["#374151"], // Set the color to green
      },
    },
    tooltip: {
      theme: "dark",
      x: {
        show: false,
      },
      custom: function ({ seriesIndex, dataPointIndex, w }) {
        const bgColor = "#374151"; // Set your custom background color
        return `<div style="background-color: ${bgColor}; color: white; padding: 10px; border-radius: 5px;">${w.globals.series[seriesIndex][dataPointIndex]}°C</div>`;
      },
    },
  };

  return (
    <div style={{ userSelect: 'none' }}> {/* Apply user-select: none to the chart container */}
    <ReactApexChart
      options={options2}
      series={options2.series}
      type="area"
      height={150}
      style={{ userSelect: 'none' }}
    />
    </div>
  );
};

export default AreaChart;

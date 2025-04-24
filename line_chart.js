var ctx = document.getElementById("myChart").getContext("2d");
/*** Gradient ***/
var gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, "rgb(50, 110, 250)");
gradient.addColorStop(1, "rgba(103, 50, 250, 0)");
/***************/
const xValues = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
const yValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15, 6];

var data = {
  labels: xValues,
  datasets: [
    {
      fill: "start",
      backgroundColor: gradient,
      borderColor: "#6d53ff",
      pointBackgroundColor: "#6d53ff",
      pointBorderColor: "#6d53ff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "#ff6c23",
      data: yValues,
    },
  ],
};

var options = {
  plugins: {
    title: {
      display: true,
      text: "Custom Chart Title",
    },
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  //responsive: true,
  //datasetStrokeWidth : 3,
  //pointDotStrokeWidth : 4,
  //tooltipFillColor: "rgba(0,0,0,0.8)",
  //tooltipFontStyle: "bold",
  //tooltipTemplate: "<%if (label){%><%=label + ' hod' %>: <%}%><%= value + '°C' %>",
  //scaleLabel : "<%= Number(value).toFixed(0).replace('.', ',') + '°C'%>" ,
  scales: {
    y: {
      min: 0,
      max: 20,
      ticks: {
        stepSize: 2,
      },
    },
  },
};

new Chart("myChart", {
  type: "line",
  data: data,
  options: options,
});
Chart.register(ChartDataLabels)


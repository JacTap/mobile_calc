// const labels = Utils.months({ count: 7 });
// const data = {
//   labels: labels,
//   datasets: [
//     {
//       label: "My First Dataset",
//       data: [65, 59, 80, 81, 56, 55, 40],
//       fill: false,
//       borderColor: "rgb(75, 192, 192)",
//       tension: 0.1,
//     },
//   ],
// };

// const config = {
//   type: "line",
//   data: data,
// };

const xValues = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
const yValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15, 6];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: yValues,
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      y: [{ ticks: { min: 6, max: 16 } }],
    },
  },
});

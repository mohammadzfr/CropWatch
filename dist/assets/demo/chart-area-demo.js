// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["0%", "20%", "40%", "60%", "80%"],
    datasets: [{
      label: "Temperature",
      lineTension: 0.3,
      backgroundColor: "rgba(50, 168, 82,0.2)",
      borderColor: "rgba(50, 168, 82,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(50, 168, 82,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(50, 168, 82,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [50, 70, 60, 80, 90, 120, 110],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 50,
          max: 150,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});

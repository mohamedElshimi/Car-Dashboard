// Get the canvas element
var canvas2 = document.getElementById('myChart');
canvas2.style.width='100%';
canvas2.style.height='130%';

// Create a new chart using the canvas context
var chart = new Chart(canvas2, {
  type: 'line',
  data: {
    labels: ['3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm'],
    datasets: [{
      label: 'Stat',
      data: [80, 60, 100, 50, 80, 40, 70],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

var canvas = document.getElementById('histogram');
canvas.style.width='100%';
canvas.style.height='130%';

// Create a new chart using the canvas context
var chart = new Chart(canvas, {
  type: 'bar',
  data: {
    labels: ['3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm'],
    datasets: [{
      label: 'Stat',
      data: [80, 60, 100, 50, 80, 40, 70],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  // Chart data
  const data = {
    labels: ['Blogs', 'Messages', 'Destinations'],
    datasets: [
      {
        label: 'Count of Items',
        data: [10, 15, 5], 
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)', // Blue for Blogs
          'rgba(255, 99, 132, 0.6)', // Red for Messages
          'rgba(75, 192, 192, 0.6)', // Teal for Destinations
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Count',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Categories',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Tally of Blogs, Messages, and Destinations',
      },
    },
  };

  return (
    <div style={{ width: '60vw', height: '60vh', margin: '0px 45px', borderRadius: "9px",  background: "white"}}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Chart;
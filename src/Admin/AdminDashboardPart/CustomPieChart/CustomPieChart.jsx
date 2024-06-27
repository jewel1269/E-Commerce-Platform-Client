// src/CustomPieChart/CustomPieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';

const data = {
  labels: ['Automobiles', 'Machinery', 'Home decor items', 'Chemicals'],
  datasets: [
    {
      data: [30, 25, 20, 25],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
    },
  ],
};

const CustomPieChart = () => {
  return <Pie data={data} />;
};

export default CustomPieChart;

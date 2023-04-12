import React from 'react';
import { Card } from '../../../components';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

const ProfitChart = () => {
  return (
    <Card>
      <div className="p-6">
        <div>Profit</div>
        <div className="text-primarygreen text-[28px]">8,24k</div>
        <Line
          className="mt-6"
          height={100}
          width={160}
          datasetIdKey="profit-chart"
          options={{
            responsive: true,
            scales: {
              y: { display: false },
              x: { display: false },
            },
          }}
          data={{
            labels: ['1', '2', '3', '4', '5', '6'],
            datasets: [
              {
                data: [0, 6, 2, 8, 4, 10],
                backgroundColor: 'rgba(11, 184, 133, 1)',
                borderColor: 'rgba(11, 184, 133, 1)',
              },
            ],
          }}
        />
      </div>
    </Card>
  );
};

export default ProfitChart;

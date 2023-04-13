import React from 'react';
import { Card } from '../../../components';
import { Bar } from 'react-chartjs-2';
import { BarElement, CategoryScale, Chart, LinearScale } from 'chart.js';
import { rgbaColors } from '../../../helpers/colors';

Chart.register(CategoryScale, LinearScale, BarElement);

const OrdersChart = () => {
  return (
    <Card>
      <div className="p-6 h-full flex flex-col justify-between">
        <div>
          <div className="font-semibold">Orders</div>
          <div className="text-orange text-[28px]">189k</div>
        </div>
        <Bar
          height={100}
          width={160}
          className="mt-6"
          datasetIdKey="orders-chart"
          options={{
            responsive: true,
            scales: {
              y: { display: false },
              x: { display: false },
            },
          }}
          data={{
            labels: ['1', '2', '3', '4', '5'],
            datasets: [
              {
                data: [6, 12, 8, 4, 10],
                backgroundColor: rgbaColors.secondaryOrange,
                barThickness: 6,
                borderRadius: 20,
              },
            ],
          }}
        />
      </div>
    </Card>
  );
};

export default OrdersChart;

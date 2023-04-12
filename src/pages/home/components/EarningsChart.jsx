import React from 'react';
import ApexChart from 'react-apexcharts';
import { Card } from '../../../components';

const EarningsChart = () => {
  return (
    <Card>
      <div className="p-6 h-[100px]">
        <div>Earnings</div>
        <div className="flex flex-row items-center gap-10">
          <ApexChart
            type="radialBar"
            options={{
              chart: { id: 'earnings-chart' },
              colors: ['#0BB885', '#FF814A'],
              stroke: { lineCap: 'round' },
              plotOptions: {
                radialBar: {
                  track: { background: '#1F2849', show: true },
                  dataLabels: { show: false },
                },
              },
            }}
            series={[80, 60]}
            width={165}
            height={200}
          />
          <div className="text-xs flex flex-col gap-6">
            <div className="flex flex-row items-center gap-4">
              <div className="bg-primarygreen rounded-full h-[8px] w-[8px]" />
              <div>
                <div>Total Sales</div>
                <div className="text-gray-400">251k</div>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <div className="bg-orange rounded-full h-[8px] w-[8px]" />
              <div>
                <div>Total Orders</div>
                <div className="text-gray-400">176k</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EarningsChart;

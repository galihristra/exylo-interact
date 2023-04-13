import React, { useEffect, useRef, useState } from 'react';
import ApexChart from 'react-apexcharts';
import { Card } from '../../../components';
import { ChevronDownIcon } from '../../../assets/icons';
import { earningsData } from '../data/mock-data';
import { kFormatter } from '../../../helpers/utils';

const periodOptions = [
  { label: 'This Week', value: 'this_week' },
  { label: '2 Weeks Ago', value: 'two_weeks_ago' },
  { label: 'Last Month', value: 'last_month' },
];

const EarningsChart = () => {
  const [period, setPeriod] = useState(periodOptions[0]);
  const [data, setData] = useState(earningsData.this_week);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setData(earningsData[period.value]);
  }, [period]);

  const changePeriod = period => {
    setPeriod(period);
    dropdownRef.current.blur();
  };

  return (
    <Card>
      <div className="p-6 h-[100px]">
        <div className="flex flex-row items-center justify-between">
          <div>Earnings</div>
          <div className="dropdown">
            <label tabIndex={0} className="text-sm flex items-center text-neutral-400 gap-1">
              {period.label} <ChevronDownIcon />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-neutral-600 rounded-box text-xs w-32"
              ref={dropdownRef}
            >
              {periodOptions.map(period => (
                <li
                  key={period.value}
                  className="active:bg-primarygreen rounded-md hover:bg-primarygreen"
                >
                  <a onClick={() => changePeriod(period)}>{period.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
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
            series={[data.totalSales.progress, data.totalOrders.progress]}
            width={165}
            height={200}
          />
          <div className="text-xs flex flex-col gap-6">
            <div className="flex flex-row items-center gap-4">
              <div className="bg-primarygreen rounded-full h-[8px] w-[8px]" />
              <div>
                <div>Total Sales</div>
                <div className="text-gray-400">{kFormatter(data.totalSales.amount)}</div>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <div className="bg-orange rounded-full h-[8px] w-[8px]" />
              <div>
                <div>Total Orders</div>
                <div className="text-gray-400">{kFormatter(data.totalOrders.amount)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EarningsChart;

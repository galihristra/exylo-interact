import React from 'react';
import { Card } from '../../../components';
import { Bar } from 'react-chartjs-2';
import { BarElement, CategoryScale, Chart, LinearScale } from 'chart.js';
import { rgbaColors } from '../../../helpers/colors';
import { ChevronDownIcon } from '../../../assets/icons';

Chart.register(CategoryScale, LinearScale, BarElement);

const TotalProfitChart = () => {
  return (
    <Card>
      <div className="grid grid-cols-3">
        <div className="p-6 col-span-2">
          <div className="flex flex-row items-center justify-between">
            <div className="font-semibold">Total Profit</div>
            <div className="flex flex-row items-center gap-6 text-gray-400 text-sm">
              <div className="flex flex-row items-center gap-2">
                <div className="bg-primarygreen rounded-full h-[8px] w-[8px]" />
                <span>Earning</span>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="bg-orange rounded-full h-[8px] w-[8px]" />
                <span>Expense</span>
              </div>
            </div>
          </div>
          <Bar
            className="mt-10"
            options={{
              responsive: true,
              interaction: { intersect: false },
              scales: {
                x: { stacked: true },
                y: { stacked: true, ticks: { count: 7 } },
              },
            }}
            height={140}
            data={{
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
              datasets: [
                {
                  label: 'Earnings',
                  data: [120, 220, 300, 280, 115, 60, 230, 200, 100],
                  backgroundColor: rgbaColors.primaryGreen,
                  barThickness: 10,
                  borderRadius: 20,
                },
                {
                  label: 'Expense',
                  data: [-180, -100, -60, -220, -120, -50, -100, -90, -120],
                  backgroundColor: rgbaColors.secondaryOrange,
                  barThickness: 10,
                  borderRadius: 20,
                },
              ],
            }}
          />
        </div>
        <div className="border-l-[1px] border-l-darkblue-32 p-6 flex justify-center">
          <div className="flex flex-col justify-between text-center items-center">
            <button className="btn btn-sm text-primarygreen btn-outline gap-1 w-fit">
              <span className="text-xs">2023</span>
              <ChevronDownIcon strokeColor={rgbaColors.primaryGreen} />
            </button>

            <div className="flex flex-col gap-2">
              <div className="text-4xl font-bold">$842.98</div>
              <div className="text-xs text-black-46 font-semibold">
                Latest Month Balance $426.20k
              </div>
            </div>

            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="147"
                height="46"
                fill="none"
                viewBox="0 0 147 46"
              >
                <path
                  stroke="#0BB885"
                  strokeLinecap="round"
                  strokeWidth="1.787"
                  d="M1.252 20.882s7.198 3.538 10.033 8.725c2.834 5.187 5.74 8.765 8.932 1.712 3.193-7.053 4.955-12.22 4.955-12.22s3.905-7.524 8.606-.971c4.7 6.553 7.733 11.479 7.733 11.479s4.66 6.025 9.106 1.712c4.446-4.314 7.273-6.774 7.273-6.774s4.813-3.395 6.843 2.223c2.03 5.618 5.077 13.703 5.077 13.703s1.28 2.6 2.934 3.683c1.655 1.084 4.683.73 6.302-3.008 1.62-3.738 7.097-21.244 7.097-21.244s3.461-9.78 5.336-14.274c1.874-4.496 7.02-8.05 10.633.975 3.612 9.026 4.252 12.496 4.252 12.496s1.555 5.22 6.135 4.663c4.579-.558 4.77 1.883 6.29 5.393 1.521 3.51 5.679 8.133 5.679 8.133s3.361 4.055 8.849-1.199c5.488-5.254 9.14-9.126 12.687-17.424"
                ></path>
              </svg>
            </div>

            <button className="bg-primarygreen px-6 py-2 rounded-lg font-semibold">
              View Report
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TotalProfitChart;

import React from 'react';
import {
  TopPanel,
  EarningsChart,
  OrdersChart,
  ProfitChart,
  ActivityOverview,
  TotalProfitChart,
} from './components';

const Home = () => {
  return (
    <div>
      <TopPanel />

      <div className="mt-4 grid grid-cols-5 gap-4">
        <div className="col-span-3 flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="flex-auto">
              <EarningsChart />
            </div>
            <div className="flex">
              <OrdersChart />
            </div>
            <div className="flex">
              <ProfitChart />
            </div>
          </div>
          <div className="col-span-4">
            <TotalProfitChart />
          </div>
        </div>
        <div className="col-span-2">
          <ActivityOverview />
        </div>
      </div>
    </div>
  );
};

export default Home;

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

      <div className="mt-4 flex gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <EarningsChart />
            <OrdersChart />
            <ProfitChart />
          </div>
          <div>
            <TotalProfitChart />
          </div>
        </div>
        <div className="flex-1">
          <ActivityOverview />
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useMemo, useState } from 'react';
import { topPanelData } from '../data/mock-data';
import { renderAmount } from '../../../helpers/utils';
import { CircularIcon, TrophyIcon, CalendarIcon, PieIcon, WalletIcon } from '../../../assets/icons';

const TopPanel = () => {
  const [activePanel, setActivePanel] = useState('totalCost');

  const panelList = useMemo(
    () => [
      {
        key: 'totalCost',
        primary: 'Total Cost',
        secondary: renderAmount(topPanelData.totalCost),
        icon: <CircularIcon />,
      },
      {
        key: 'totalSales',
        primary: 'Total Sales',
        secondary: renderAmount(topPanelData.totalSales),
        icon: <TrophyIcon />,
      },
      {
        key: 'weeklyIncome',
        primary: 'This Week',
        secondary: renderAmount(topPanelData.weeklyIncome),
        icon: <CalendarIcon />,
      },
      {
        key: 'revenue',
        primary: 'Revenue',
        secondary: renderAmount(topPanelData.revenue),
        icon: <PieIcon />,
      },
      {
        key: 'lastPayment',
        primary: renderAmount(topPanelData.lastPayment),
        secondary: 'Last Payment',
        icon: <WalletIcon />,
      },
    ],
    [topPanelData]
  );

  const togglePanel = panel => setActivePanel(panel);

  return (
    <div className="grid grid-cols-5 gap-4">
      {panelList.map(({ key, primary, secondary, icon }) => {
        const isActive = activePanel === key;
        return (
          <button
            key={key}
            disabled={isActive}
            className={`rounded-md flex flex-row items-center gap-4 text-start p-6 ${
              isActive ? 'bg-primarygreen' : 'bg-darkblue-24'
            } shadow-md`}
            onClick={() => togglePanel(key)}
          >
            {icon}
            <div>
              <div className="font-semibold">{primary}</div>
              <div className={`${isActive ? 'text-white font-semibold' : 'text-black-46'} text-sm`}>
                {secondary}
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default TopPanel;

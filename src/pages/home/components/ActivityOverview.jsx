import React from 'react';
import { Card } from '../../../components';
import { ArrowUpIcon } from '../../../assets/icons';
import { activityOverviewData } from '../data/mock-data';

const ActivityOverview = () => {
  return (
    <Card>
      <div className="p-6">
        <div className="text-lg">Activity Overview</div>
        <div className="flex flex-row items-center my-4 gap-2">
          <ArrowUpIcon />
          <span>16% this month</span>
        </div>

        <ol className="border-l-2 ml-3 mt-10 border-timelineborder">
          {activityOverviewData.map(activity => (
            <li key={activity.id}>
              <div className="flex-start flex items-center">
                <div className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full border-2 border-orange bg-darkblue-24"></div>
                <h4 className="-mt-2">{activity.message}</h4>
              </div>
              <div className="mb-6 ml-5 pb-6">
                <p className="mb-4 mt-2 text-neutral-600 text-xs">{activity.timestamp}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Card>
  );
};

export default ActivityOverview;

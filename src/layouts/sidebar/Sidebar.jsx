import { useState } from 'react';
import {
  HomeIcon,
  InteractLogo,
  LogoutIcon,
  NotificationIcon,
  ReportsIcon,
  SettingsIcon,
} from '../../assets/icons';

const listMenu = [
  { key: 'home', label: 'Home', icon: <HomeIcon /> },
  { key: 'reports', label: 'Reports', icon: <ReportsIcon /> },
  { key: 'notifications', label: 'Notifications', icon: <NotificationIcon />, badge: '1' },
  { key: 'settings', label: 'Settings', icon: <SettingsIcon /> },
  { key: 'logout', label: 'Log out', icon: <LogoutIcon /> },
];

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState('home');

  const navigateToMenu = menu => setActiveMenu(menu);

  return (
    <div>
      <div className="bg-darkblue h-screen w-72 p-4 text-lightgray">
        {/* Logo */}
        <div className="mb-10 text-white flex flex-row items-center ml-1">
          <span className="mr-2">
            <InteractLogo />
          </span>
          Inter-act
        </div>

        {/* List Menu */}
        <ul>
          {listMenu.map(({ key, icon, label, badge }) => (
            <li key={key} onClick={() => navigateToMenu(key)}>
              <a
                href="#"
                className={`py-3 px-2 my-2 rounded-md flex flex-row items-center hover:bg-darkblueactive ${
                  activeMenu === key ? 'bg-darkblueactive' : ''
                } cursor-pointer`}
              >
                <span className="w-10">{icon}</span>
                {label}
                {badge && (
                  <div className="ml-auto bg-lightgreen px-1 rounded-sm text-sm text-black">
                    {badge}
                  </div>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

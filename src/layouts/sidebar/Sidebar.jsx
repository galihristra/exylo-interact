import React, { useState } from 'react';
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
    <>
      <div className="bg-sidebar fixed top-0 h-screen w-[250px] p-4 m-0">
        {/* Logo */}
        <div className="mb-12 text-white flex flex-row items-center ml-1">
          <span className="mr-2">
            <InteractLogo />
          </span>
          Inter-act
        </div>

        {/* List Menu */}
        <ul>
          {listMenu.map(({ key, icon, label, badge }) => {
            const isActive = activeMenu === key;
            return (
              <li key={key} onClick={() => navigateToMenu(key)}>
                <a
                  href="#"
                  className={`py-3 px-2 my-2 rounded-md flex flex-row items-center hover:bg-sidebaractive ${
                    isActive ? 'bg-sidebaractive' : ''
                  } cursor-pointer`}
                >
                  <span className="w-10">{icon}</span>
                  <span className={`${isActive ? 'text-white' : 'text-black-46'}`}>{label}</span>
                  {badge && (
                    <div className="ml-auto bg-lightgreen px-1.5 rounded-sm text-sm text-black">
                      {badge}
                    </div>
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;

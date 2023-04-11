import React from 'react';

const Header = () => {
  return (
    <header className="bg-mainbackground fixed h-[48px] flex justify-end border-b-[0.5px] border-b-gray-500 w-[inherit]">
      <div className="flex flex-row items-center gap-2 mr-8">
        <div className="p-3 rounded-full bg-gray-300 shadow-lg" />
        <span className="text-white text-[12px] ">Hello, User!</span>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';

const PageHeader = () => {
  return (
    <div className="mb-8">
      <div className="text-[30px] font-semibold">Marketing Dashboard</div>
      <nav className="w-full text-sm">
        <ol className="flex">
          <li>
            <a href="#" className="text-neutral-500">
              Home
            </a>
          </li>
          <li>
            <span className="mx-2 text-neutral-500">/</span>
          </li>
          <li className="text-primarygreen">Dashboard</li>
        </ol>
      </nav>
    </div>
  );
};

export default PageHeader;

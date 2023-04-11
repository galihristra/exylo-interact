import React, { useEffect } from 'react';
import { Header, Sidebar } from './layouts';
import { Home } from './pages';
import { PageHeader } from './components';

function App() {
  useEffect(() => {
    const importTE = async () => {
      await import('tw-elements');
    };
    importTE();
  }, []);

  return (
    <div className="w-screen">
      <Sidebar />
      <div className="float-right app-body flex">
        <Header />

        <div className="mt-[48px] overflow-x-hidden flex-grow">
          <main className="min-w-0 flex flex-col p-8">
            <PageHeader />
            <Home />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;

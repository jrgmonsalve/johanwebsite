// App.tsx
import React from 'react';
import LeftColumn from './components/LeftColumn';
import RightColumn from './components/RightColumn';
import Footer from './components/Footer';


const App: React.FC = () => {
  return (
    <div className="bg-gray-500 text-gray-200">
      <div className="container mx-auto p-5 max-w-7xl">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-1/3">
            <LeftColumn/>
          </div>
          <div className="w-full md:w-2/3">
            <RightColumn />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
import { useState } from 'react';

export const Tabs = ({ tabs, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
    onTabChange(index);
  };

  return (
    <div className='py-20 justify-center px-'>
      
      <div className="flex border-b border-gray-200 py-10">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${
              activeTab === index
                ? 'bg-gray-500 text-gray-900'
                : 'text-gray-500 hover:text-gray-700'
            } py-3 px-9 font-medium rounded-md `}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="mt-6  ">{tabs[activeTab].content}</div>
    </div>
  );
};
export default Tabs;
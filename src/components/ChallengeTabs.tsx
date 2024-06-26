// components/Tabs.tsx
import React from "react";

interface Tab {
  id: number;
  title: string;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: number;
  onTabClick: (id: number) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabClick }) => {
  return (
    <div className="flex border-b">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`-mb-px border-b-2 px-4 py-2 ${
            activeTab === tab.id
              ? "border-blue-500 text-blue-500"
              : "border-transparent"
          }`}
          onClick={() => onTabClick(tab.id)}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
};

export default Tabs;

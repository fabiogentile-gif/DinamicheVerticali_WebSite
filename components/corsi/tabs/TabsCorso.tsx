'use client';

import { ReactNode, useState } from 'react';
import CorsiTabsButton from './CorsiTabsButton';

export interface CourseTab {
  id: string;
  title: string;
  content: ReactNode;
  dropdown?: boolean;
}

interface CourseTabsProps {
  tabs: CourseTab[];
  defaultTab?: string;
}

export default function CourseTabs({ tabs, defaultTab }: CourseTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab ?? tabs[0].id);

  const activeContent = tabs.find(tab => tab.id === activeTab);

  return (
    <section className="bg-white py-7">
      <div className="container mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap gap-2">
          {tabs.map(tab => (
            <CorsiTabsButton
              key={tab.id}
              title={tab.title}
              active={activeTab === tab.id}
              dropdown={tab.dropdown}
              onClick={() => setActiveTab(tab.id)}
            />
          ))}
        </div>

        <div className="mt-4 border border-border bg-background-lighter p-8">
          {activeContent?.content}
        </div>
      </div>
    </section>
  );
}
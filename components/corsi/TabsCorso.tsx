'use client';

import { useState, ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

export interface CourseTab {
  id: string;
  title: string;
  content: ReactNode;
  dropdown?: boolean;
}

interface CourseTabsProps {
  tabs: CourseTab[];
}

export default function CourseTabs({ tabs }: CourseTabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeContent = tabs.find((tab) => tab.id === activeTab);

  return (
    <section className="bg-white py-7">
      <div className="container mx-auto max-w-4xl px-5">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 border px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'border-burning-orange-400 bg-burning-orange-400 text-white'
                  : 'border-border bg-background text-foreground hover:border-burning-orange-400'
              }`}
            >
              {tab.title}

              {tab.dropdown && <ChevronDown size={16} />}
            </button>
          ))}
        </div>

        <div className="mt-4 border border-border bg-background-lighter p-6">{activeContent?.content}</div>
      </div>
    </section>
  );
}

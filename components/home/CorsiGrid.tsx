"use client";

import { useState } from "react";
import CardCorsi from "@/components/home/CardCorsi";

type Props = {
  courses: any[];
};

export default function CorsiGrid({ courses }: Props) {
  const [visible, setVisible] = useState(8);

  const showMore = () => {
    setVisible((v) => v + 8);
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {courses.slice(0, visible).map((course) => (
          <CardCorsi key={course.id} course={course} />
        ))}
      </div>

      {visible < courses.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={showMore}
            className="px-4 py-2 rounded bg-primary text-white"
          >
            Mostra altri
          </button>
        </div>
      )}
    </div>
  );
}
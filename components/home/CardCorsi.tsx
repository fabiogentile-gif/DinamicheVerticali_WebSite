import Image from "next/image";

import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type CourseSession = {
  id: string;
  startDate: Date;
  endDate: Date | null;
};

type Course = {
  id: string;
  title: string;
  description: string | null;
  logo: string | null;
  tag: string;
  month: string | null;
  durationDays: number | null;
  durationHours: number | null;
  examDays: number | null;
  sessions: CourseSession[];
};

type CardCorsiProps = {
  course: Course;
};

export default function CardCorsi({ course }: CardCorsiProps) {
  return (
    <Card className="w-full max-w-sm rounded-2xl overflow-hidden shadow-md">

      {/* Header / Logo */}
      <div className="flex justify-center items-center py-6">
        {course.logo ? (
          <div className="relative h-12 w-32">
            <Image
              src={course.logo}
              alt={course.title}
              fill
              className="object-contain"
            />
          </div>
        ) : (
          <div className="h-12 w-32 bg-muted rounded-md flex items-center justify-center text-sm">
            LOGO
          </div>
        )}
      </div>

      <CardContent className="space-y-4">

        {/* Tags */}
        <div className="flex justify-between">
          <Badge variant="secondary">{course.tag}</Badge>
          {course.month && <Badge variant="outline">{course.month}</Badge>}
        </div>

        {/* Titolo */}
        <h3 className="text-lg font-semibold">
          {course.title}
        </h3>

        {/* Descrizione */}
        <p className="text-sm text-muted-foreground line-clamp-2">
          {course.description}
        </p>

        {/* Info */}
        <div className="space-y-1 text-sm">
          {course.sessions.length > 0 ? (
            <p>
              📅{" "}
              {course.sessions
                .map((s) =>
                  new Date(s.startDate).toLocaleDateString("it-IT")
                )
                .join(" · ")}
            </p>
          ) : (
            <p>📅 Date da definire</p>
          )}

          <p>
            ⏱ {course.durationDays} gg
            {course.examDays ? ` + ${course.examDays} esame` : ""}
          </p>
        </div>

      </CardContent>

      {/* Footer */}
      <CardFooter className="flex justify-between items-center">
        <Button variant="link" className="px-0">
          Leggi il corso
        </Button>
        <span className="text-lg">→</span>
      </CardFooter>
    </Card>
  );
}
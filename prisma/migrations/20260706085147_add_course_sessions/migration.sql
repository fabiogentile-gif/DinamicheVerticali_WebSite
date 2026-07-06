/*
  Warnings:

  - You are about to drop the column `endDate` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `examDays` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `Course` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "CourseSession" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME,
    "courseId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "CourseSession_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Course" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "logo" TEXT,
    "tag" TEXT NOT NULL,
    "month" TEXT NOT NULL,
    "bannerimage" TEXT,
    "certificateDuration" INTEGER,
    "price" INTEGER,
    "category" TEXT NOT NULL,
    "durationDays" INTEGER,
    "durationHours" INTEGER,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Course" ("category", "createdAt", "description", "durationDays", "featured", "id", "logo", "month", "tag", "title", "updatedAt") SELECT "category", "createdAt", "description", "durationDays", "featured", "id", "logo", "month", "tag", "title", "updatedAt" FROM "Course";
DROP TABLE "Course";
ALTER TABLE "new_Course" RENAME TO "Course";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

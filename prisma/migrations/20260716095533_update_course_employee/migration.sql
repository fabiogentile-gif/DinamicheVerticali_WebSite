/*
  Warnings:

  - You are about to drop the column `bannerImage` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `durationHours` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `featured` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `logo` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `month` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `tag` on the `Course` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Employee" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "roles" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "_CourseToEmployee" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_CourseToEmployee_A_fkey" FOREIGN KEY ("A") REFERENCES "Course" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CourseToEmployee_B_fkey" FOREIGN KEY ("B") REFERENCES "Employee" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Course" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "category" TEXT NOT NULL,
    "location" TEXT,
    "durationDays" INTEGER,
    "examDays" INTEGER,
    "time" DATETIME,
    "price" INTEGER,
    "certificateDuration" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Course" ("category", "certificateDuration", "createdAt", "description", "durationDays", "examDays", "id", "price", "title", "updatedAt") SELECT "category", "certificateDuration", "createdAt", "description", "durationDays", "examDays", "id", "price", "title", "updatedAt" FROM "Course";
DROP TABLE "Course";
ALTER TABLE "new_Course" RENAME TO "Course";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "_CourseToEmployee_AB_unique" ON "_CourseToEmployee"("A", "B");

-- CreateIndex
CREATE INDEX "_CourseToEmployee_B_index" ON "_CourseToEmployee"("B");

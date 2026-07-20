/*
  Warnings:

  - Added the required column `requirements` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Made the column `certificateDuration` on table `Course` required. This step will fail if there are existing NULL values in that column.
  - Made the column `location` on table `Course` required. This step will fail if there are existing NULL values in that column.
  - Made the column `price` on table `Course` required. This step will fail if there are existing NULL values in that column.
  - Made the column `time` on table `Course` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Course" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "categoryId" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "durationDays" INTEGER,
    "examDays" INTEGER,
    "time" DATETIME NOT NULL,
    "price" INTEGER NOT NULL,
    "certificateDuration" INTEGER NOT NULL,
    "requirements" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Course_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Course" ("categoryId", "certificateDuration", "createdAt", "description", "durationDays", "examDays", "id", "location", "price", "slug", "time", "title", "updatedAt") SELECT "categoryId", "certificateDuration", "createdAt", "description", "durationDays", "examDays", "id", "location", "price", "slug", "time", "title", "updatedAt" FROM "Course";
DROP TABLE "Course";
ALTER TABLE "new_Course" RENAME TO "Course";
CREATE UNIQUE INDEX "Course_slug_key" ON "Course"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

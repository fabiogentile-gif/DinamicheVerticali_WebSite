-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Course" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "logo" TEXT,
    "tag" TEXT NOT NULL,
    "month" TEXT,
    "bannerImage" TEXT,
    "certificateDuration" INTEGER,
    "price" INTEGER,
    "category" TEXT NOT NULL,
    "durationDays" INTEGER,
    "durationHours" INTEGER,
    "examDays" INTEGER,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Course" ("bannerImage", "category", "certificateDuration", "createdAt", "description", "durationDays", "durationHours", "featured", "id", "logo", "month", "price", "tag", "title", "updatedAt") SELECT "bannerImage", "category", "certificateDuration", "createdAt", "description", "durationDays", "durationHours", "featured", "id", "logo", "month", "price", "tag", "title", "updatedAt" FROM "Course";
DROP TABLE "Course";
ALTER TABLE "new_Course" RENAME TO "Course";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

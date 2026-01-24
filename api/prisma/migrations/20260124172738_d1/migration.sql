/*
  Warnings:

  - The `picurl` column on the `Event` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `picurl` column on the `NewsPost` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `picurl` on the `Gallery` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "picurl",
ADD COLUMN     "picurl" JSONB;

-- AlterTable
ALTER TABLE "Gallery" DROP COLUMN "picurl",
ADD COLUMN     "picurl" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "NewsPost" DROP COLUMN "picurl",
ADD COLUMN     "picurl" JSONB;

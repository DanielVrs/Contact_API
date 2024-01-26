/*
  Warnings:

  - Added the required column `email` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fone` to the `Contact` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "MeanOfContact" DROP CONSTRAINT "MeanOfContact_contactId_fkey";

-- DropForeignKey
ALTER TABLE "MeanOfContact" DROP CONSTRAINT "MeanOfContact_userId_fkey";

-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "fone" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "MeanOfContact" ALTER COLUMN "contactId" DROP NOT NULL,
ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "MeanOfContact" ADD CONSTRAINT "MeanOfContact_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contact"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MeanOfContact" ADD CONSTRAINT "MeanOfContact_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

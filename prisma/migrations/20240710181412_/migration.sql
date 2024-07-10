/*
  Warnings:

  - You are about to drop the `GeneralConfigs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TrustedDevices` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[username]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Users` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "TrustedDevices" DROP CONSTRAINT "TrustedDevices_tokenId_fkey";

-- DropForeignKey
ALTER TABLE "TrustedDevices" DROP CONSTRAINT "TrustedDevices_userId_fkey";

-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "GeneralConfigs";

-- DropTable
DROP TABLE "TrustedDevices";

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

/*
  Warnings:

  - You are about to drop the column `birthdate` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `displayName` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `pinPassword` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `Users` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Users_username_key";

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "birthdate",
DROP COLUMN "displayName",
DROP COLUMN "firstName",
DROP COLUMN "lastName",
DROP COLUMN "pinPassword",
DROP COLUMN "username",
ADD COLUMN     "fullName" VARCHAR(255);

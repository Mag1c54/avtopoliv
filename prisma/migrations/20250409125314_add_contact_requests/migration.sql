/*
  Warnings:

  - You are about to drop the `FormSubmission` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "FormSubmission";

-- CreateTable
CREATE TABLE "ContactRequest" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContactRequest_pkey" PRIMARY KEY ("id")
);

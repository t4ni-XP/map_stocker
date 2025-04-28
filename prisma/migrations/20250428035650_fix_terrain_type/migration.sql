-- CreateEnum
CREATE TYPE "terrainType" AS ENUM ('SPRINT', 'FOREST');

-- AlterTable
ALTER TABLE "MapImage" ADD COLUMN     "routedImageUrl" TEXT,
ADD COLUMN     "terrainType" "terrainType" DEFAULT 'FOREST';

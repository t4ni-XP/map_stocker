-- AddForeignKey
ALTER TABLE "MapImage" ADD CONSTRAINT "MapImage_mapLocationId_fkey" FOREIGN KEY ("mapLocationId") REFERENCES "MapLocation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

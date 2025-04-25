// src/app/page.tsx  （サーバーコンポーネント）
import React from "react";
import { Box } from "@mui/material";
import prisma from "@/lib/prisma";
import MapSection from "@/components/MapSection";

export const dynamic = "force-dynamic";

export default async function Home() {
  const mapLocations = await prisma.mapLocation.findMany({
    select: {
      id: true,
      name: true,
      lat: true,
      lng: true,
      mapImages: {
        select: {
          id: true,
          imageUrl: true,
        },
        take: 1,
      },
    },
  });

  return (
    <Box sx={{ width: "100%", height: "80vh", maxWidth: "lg", mx: "auto" }}>
      {/* クライアントコンポーネントをここでレンダー */}
      <MapSection mapLocations={mapLocations} />
    </Box>
  );
}

// src/app/page.tsx  （サーバーコンポーネント）
import React from "react";
import { Box, Typography } from "@mui/material";
import prisma from "@/lib/prisma";
import MapSection from "@/components/MapSection";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return (
      <Box>
        <Typography>Map Stockerとは</Typography>
        <Box>
          <Typography>Map Stockerはオリエンテーリング等の地図を管理できるサイトです</Typography>
        </Box>
      </Box>
    );
  }
  // console.log(session);
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
    where: {
      user: {
        id: session.user.id as string,
      },
    },
  });
  // console.log(mapLocations);
  return (
    <Box sx={{ width: "100%", height: "80vh", maxWidth: "lg", mx: "auto" }}>
      {/* クライアントコンポーネントをここでレンダー */}
      <MapSection mapLocations={mapLocations} />
    </Box>
  );
}

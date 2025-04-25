// src/app/page.tsx  （サーバーコンポーネント）
import { Box } from "@mui/material";
import prisma from "@/lib/prisma";
import MapSection from "@/components/MapSection";

export default async function Home() {
  const positions = await prisma.mapLocation.findMany({
    select: { id: true, lat: true, lng: true },
  });

  return (
    <Box sx={{ width: "100%", height: "80vh", maxWidth: "lg", mx: "auto" }}>
      {/* クライアントコンポーネントをここでレンダー */}
      <MapSection positions={positions} />
    </Box>
  );
}

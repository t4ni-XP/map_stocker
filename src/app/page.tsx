// src/app/page.tsx
"use client";

import dynamic from "next/dynamic";
import { Box } from "@mui/material";

const LeafletMap = dynamic(() => import("@/components/LeafletMap"), {
  ssr: false,
});

export default function Home() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "80vh", // ここで高さを決める
        maxWidth: "lg",
        mx: "auto",
      }}
    >
      <LeafletMap />
    </Box>
  );
}

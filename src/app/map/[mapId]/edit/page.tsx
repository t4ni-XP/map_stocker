import MapForm from "@/components/MapForm";
import prisma from "@/lib/prisma";
import { TextField, Stack, Button, Box, Typography, selectClasses } from "@mui/material";
// import { useState } from "react";

export default async function MapEdit({ params }: { params: { mapId: string } }) {
  const { mapId } = params;
  const mapImage = await prisma.mapImage.findUnique({
    select: {
      id: true,
      eventName: true,
      imageUrl: true,
      routedImageUrl: true,
      date: true,
    },
    where: {
      id: mapId as string,
    },
  });
  return <MapForm mapImage={mapImage} />;
}

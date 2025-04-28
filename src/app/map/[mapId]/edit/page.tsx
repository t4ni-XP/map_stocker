import React from "react";
import MapForm from "@/components/MapForm";
import prisma from "@/lib/prisma";
import { TextField, Stack, Button, Box, Typography, selectClasses } from "@mui/material";
// import { useState } from "react";

export default function MapEdit() {
  const id = "";
  const mapImage = prisma.mapImage.findUnique({
    select: {
      id: true,
      eventName: true,
      imageUrl: true,
      routedImageUrl: true,
      date: true,
    },
    where: {
      id: id as string,
    },
  });
  return <MapForm />;
}

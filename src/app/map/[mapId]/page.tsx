import MapDataRender from "@/components/mapDataRender";
import { Box, Grid, Typography } from "@mui/material";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function MapId({ params }) {
  const { mapId } = params;
  const mapData = await prisma.mapImage.findFirst({
    select: {
      id: true,
      eventName: true,
      imageUrl: true,
      comment: true,
    },
    where: { id: mapId as string },
  });

  if (!mapData) {
    notFound();
  }

  return (
    <>
      <Box sx={{ maxWidth: "lg" }} style={{ margin: "0 auto" }}>
        {/* <Typography>id:{mapId}</Typography> */}
        <Typography variant="h3">イベント名:{mapData.eventName}</Typography>
        <Grid container spacing={2} style={{ margin: "0 auto" }}>
          <Grid size={6}>
            <Box>
              <Image alt="画像" src={mapData.imageUrl} style={{ width: "100%" }} />
            </Box>
          </Grid>
          <Grid size={6}>
            <Typography variant="body2">コメント:{mapData.comment}</Typography>
          </Grid>
        </Grid>

        <MapDataRender />
      </Box>
    </>
  );
}

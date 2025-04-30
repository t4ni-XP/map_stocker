import React from "react";
import MapDataRender from "@/components/mapDataRender";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PageProps } from "../../../../.next/types/app/layout";

export default async function MapId(props: PageProps) {
  const { mapId } = await props.params;
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
        <Stack direction={"row"}>
          <Typography mt={2} variant="h3" flexGrow={1}>
            イベント名:{mapData.eventName}
          </Typography>
          <Button href={`${mapId}/edit`}>
            <Typography flexGrow={1}>編集</Typography>
          </Button>
        </Stack>
        <Grid container spacing={2} style={{ margin: "0 auto" }}>
          <Grid size={6}>
            <Box
              ml={1}
              sx={{
                position: "relative", // ← これが必須
                width: "100%",
                height: 400, // ← お好みの高さを(px)で指定
              }}
            >
              <Image
                src={mapData.imageUrl}
                alt="地図画像"
                fill // 親の領域いっぱいに広がる
                style={{ objectFit: "contain" }} // 縦横比を保って収まる
              />
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

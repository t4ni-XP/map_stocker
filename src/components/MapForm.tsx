// src/components/MapForm.tsx
"use client";

import { ChangeEvent, useState } from "react";
import { TextField, Stack, Button, Box, Typography } from "@mui/material";
import Image from "next/image";

//
// サーバーコンポーネントから渡される「地図画像データ」の型
//
export type MapImageData = {
  id: string;
  eventName: string;
  imageUrl: string;
  routedImageUrl: string; // null なら string | null に
  date: string; // または Date 型でも可
};

//
// MapForm が受け取る props の型
//
export interface MapFormProps {
  mapImage: MapImageData;
}

export default function MapForm({ mapImage }: MapFormProps) {
  const [previewUrl, setPreviewUrl] = useState(mapImage.imageUrl || "");
  const handleMapImageUrl = (event: any) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setPreviewUrl(URL.createObjectURL(file));
  };

  const [eventName, setEventName] = useState(mapImage.eventName || "");
  const handleEventNameChange = (event: any) => {
    const newEventName = event.target.value;
    setEventName(newEventName);
  };

  return (
    <Box m={3} sx={{ maxWidth: "md", mx: "auto" }}>
      <Stack spacing={2} mt={3}>
        <Typography>地図画像*</Typography>
        <Box sx={{ pl: 3 }}>
          <input
            id="map-image"
            type="file"
            accept="image/png, image/jpeg"
            hidden
            onChange={handleMapImageUrl}
          />
          <label htmlFor="map-image">
            {previewUrl ? (
              <Box sx={{ position: "relative", width: "100%", height: 200 }}>
                <Image
                  src={previewUrl}
                  alt={mapImage.eventName}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </Box>
            ) : (
              <Typography sx={{ color: "primary.main", cursor: "pointer" }}>
                画像を選択する
              </Typography>
            )}
          </label>
        </Box>

        <Typography>タイトル*</Typography>
        <TextField
          name="eventName"
          value={eventName}
          onChange={handleEventNameChange}
          fullWidth
          required
        />

        <Typography>大会名</Typography>
        <TextField name="routedImageUrl" defaultValue={mapImage.routedImageUrl} fullWidth />

        <Typography>コメント</Typography>
        <TextField name="comment" multiline rows={4} fullWidth />

        <Typography>日付</Typography>
        <TextField
          name="date"
          type="date"
          // defaultValue={mapImage.date.split("T")[0]} // YYYY-MM-DD 部分だけ
          // InputLabelProps={{ shrink: true }}
        />

        <Button variant="contained">保存</Button>
      </Stack>
    </Box>
  );
}

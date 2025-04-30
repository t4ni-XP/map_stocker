// src/components/MapForm.tsx
"use client";

import { useState } from "react";
import { TextField, Stack, Button, Box, Typography } from "@mui/material";
import Image from "next/image";
import { MapImage } from "@/types/prisma";

export interface MapFormProps {
  mapImage: MapImage;
}

export default function MapForm({ mapImage }: MapFormProps) {
  const [previewUrl, setPreviewUrl] = useState(mapImage.imageUrl || "");
  const handleMapImageUrl = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setPreviewUrl(URL.createObjectURL(file));
  };

  const [title, setTitle] = useState(mapImage.mapLocation?.name || "");
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
  };

  const [eventName, setEventName] = useState(mapImage.eventName || "");
  const handleEventNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEventName = event.target.value;
    setEventName(newEventName);
  };

  const [comment, setComment] = useState(mapImage.comment || "");
  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newComment = event.target.value;
    setComment(newComment);
  };

  const [memo, setMemo] = useState(mapImage.memo || "");
  const handelMemoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMemo = event.target.value;
    setMemo(newMemo);
  };

  return (
    <Box m={3} sx={{ maxWidth: "md", mx: "auto" }}>
      <Typography variant="h3">地図登録/変更</Typography>
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
        <TextField name="title" value={title} onChange={handleTitleChange} fullWidth required />

        <Typography>大会名*</Typography>
        <TextField
          name="eventName"
          value={eventName}
          onChange={handleEventNameChange}
          fullWidth
          required
        />

        <Typography>コメント</Typography>
        <TextField
          name="comment"
          value={comment}
          onChange={handleCommentChange}
          fullWidth
          multiline
          rows={4}
        />

        <Typography>メモ</Typography>
        <TextField
          name="memo"
          value={memo}
          onChange={handelMemoChange}
          fullWidth
          multiline
          rows={4}
        />

        <Typography>日付</Typography>
        <TextField name="date" type="date" />

        <Button variant="contained">保存</Button>

      </Stack>
    </Box>
  );
}

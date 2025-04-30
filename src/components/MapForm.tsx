// src/components/MapForm.tsx
"use client";

import React, { ChangeEvent, useState } from "react";
import { TextField, Stack, Button, Box, Typography } from "@mui/material";
import Image from "next/image";
import { MapImage } from "@/types/prisma";

export interface MapFormProps {
  mapImage: MapImage;
}

export default function MapForm({ mapImage }: MapFormProps) {
  // プレビュー用 URL
  const [previewUrl, setPreviewUrl] = useState<string>(mapImage.imageUrl);
  const handleMapImageUrl = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPreviewUrl(URL.createObjectURL(file));
  };

  // タイトル（場所名）
  const [title, setTitle] = useState<string>(mapImage.mapLocation?.name || "");
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);

  // 大会名
  const [eventName, setEventName] = useState<string>(mapImage.eventName);
  const handleEventNameChange = (e: ChangeEvent<HTMLInputElement>) => setEventName(e.target.value);

  // コメント
  const [comment, setComment] = useState<string>(mapImage.comment);
  const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => setComment(e.target.value);

  // メモ
  const [memo, setMemo] = useState<string>(mapImage.memo || "");
  const handleMemoChange = (e: ChangeEvent<HTMLInputElement>) => setMemo(e.target.value);

  // 日付（YYYY-MM-DD）
  const initialDate = mapImage.date.split("T")[0];
  const [date, setDate] = useState<string>(initialDate);
  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => setDate(e.target.value);

  return (
    <Box m={3} sx={{ maxWidth: "md", mx: "auto" }}>
      <Typography variant="h3">地図登録/変更</Typography>
      <Stack spacing={2} mt={3}>
        {/* 画像アップロード */}
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

        {/* 各種 TextField */}
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
          onChange={handleMemoChange}
          fullWidth
          multiline
          rows={4}
        />

        <Typography>日付</Typography>
        <TextField name="date" type="date" value={date} onChange={handleDateChange} />

        <Button variant="contained">保存</Button>
      </Stack>
    </Box>
  );
}
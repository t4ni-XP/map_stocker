"use client";

import React, { ChangeEvent, useState } from "react";
import { TextField, Stack, Button, Box, Typography } from "@mui/material";
import Image from "next/image";
import { MapImage } from "@/types/prisma";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export interface MapFormProps {
  mapImage?: MapImage;
}

export default function MapForm({ mapImage }: MapFormProps) {
  // プレビュー用 URL
  const { data: session } = useSession();
  const router = useRouter();
  const [previewUrl, setPreviewUrl] = useState(mapImage?.imageUrl || "");
  const handleMapImageUrl = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPreviewUrl(URL.createObjectURL(file));
  };

  // タイトル（場所名）
  const [title, setTitle] = useState(mapImage?.mapLocation?.name || "");
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);

  // 大会名
  const [eventName, setEventName] = useState(mapImage?.eventName || "");
  const handleEventNameChange = (e: ChangeEvent<HTMLInputElement>) => setEventName(e.target.value);

  // コメント
  const [comment, setComment] = useState(mapImage?.comment || "");
  const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => setComment(e.target.value);

  // メモ
  const [memo, setMemo] = useState(mapImage?.memo || "");
  const handleMemoChange = (e: ChangeEvent<HTMLInputElement>) => setMemo(e.target.value);

  // 日付（YYYY-MM-DD）
  let initialDate = new Date().toISOString();
  if (mapImage?.date) {
    initialDate = mapImage.date.split("T")[0];
  }
  const [date, setDate] = useState(initialDate);
  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => setDate(e.target.value);

  // MapForm 内の保存ボタンハンドラ例
  const handleSave = async () => {
    // Determine if we are editing an existing map or creating a new one
    const isEdit = Boolean(mapImage?.id);
    const endpoint = isEdit ? `/api/maps/${mapImage!.id}` : "/api/maps";
    const method = isEdit ? "PUT" : "POST";

    const payload = {
      imageUrl: previewUrl,
      title,
      eventName,
      comment,
      memo,
      date,
      userId: session?.user.id,
      locationId: mapImage?.mapLocation?.id ?? "cma0m1m2o0000vwfhks9q7nj1",
    };

    const res = await fetch(endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("サーバーエラー:", text);
      alert("保存に失敗しました");
      return;
    }

    const data = await res.json();
    const targetId = isEdit ? mapImage!.id : (data.id as string);
    router.push(`/map/${targetId}/edit`);
  };

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
                <Image src={previewUrl} alt={eventName} fill style={{ objectFit: "contain" }} />
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

        <Button variant="contained" onClick={handleSave}>
          保存
        </Button>
      </Stack>
    </Box>
  );
}

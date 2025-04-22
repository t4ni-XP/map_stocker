"use client";

import { TextField, Stack, Button, Box, Typography } from "@mui/material";
// import { useState } from "react";

export default function MapForm() {
  return (
    <Box m={3} sx={{ maxWidth: "md", margin: "auto" }}>
      <Stack spacing={2} mt={3}>
        <Typography>地図画像*</Typography>
        <Box sx={{ pl: "24px" }}>
          <input
            id="user-profile-icon"
            // onChange={handleUploadImage}
            type="file"
            accept="image/png, image/jpeg"
            name="image"
            hidden
          />
          <label htmlFor="user-profile-icon">
            <Typography>画像を選択する</Typography>
          </label>
        </Box>
        <Typography>タイトル*</Typography>
        <TextField
          name="title"
          // label="タイトル"
          // value={formData.title}
          // onChange={handleChange}
          fullWidth
          required
        />
        <Typography>大会名</Typography>
        <TextField
          name="title"
          // label="タイトル"
          // value={formData.title}
          // onChange={handleChange}
        />
        <Typography>コメント</Typography>
        <TextField
          name="comment"
          // label="コメント"
          // value={formData.comment}
          // onChange={handleChange}
          multiline
          rows={4}
          fullWidth
        />
        <Typography>日付</Typography>
        <Box>
          <TextField
            name="date"
            // label="日付"
            type="date"
            // value={formData.date}
            // onChange={handleChange}
          />
        </Box>
        <Button>保存</Button>
      </Stack>
    </Box>
  );
}

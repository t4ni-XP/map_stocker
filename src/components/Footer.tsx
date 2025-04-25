import React from "react";
import { Box, Divider, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ maxWidth: "lg" }} style={{ margin: "0 auto" }}>
      <Box p={3} m={1}>
        <Divider />
        <Typography align="center" mt={2}>
          &copy; 2025 - MapStocker
        </Typography>
      </Box>
    </Box>
  );
}

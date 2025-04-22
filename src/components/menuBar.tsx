import { AppBar, Box, Link, Toolbar, Typography } from "@mui/material";

export default function MenuBar() {
  return (
    <>
      <Box sx={{ maxWidth: "lg" }} style={{ margin: "0 auto" }}>
        <AppBar position="static" color="inherit" elevation={0}>
          <Toolbar>
            <Link href="/">
              <Typography>MapStocker</Typography>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

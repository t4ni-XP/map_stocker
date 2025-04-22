import { AppBar, Box, Button, Link, Toolbar, Typography } from "@mui/material";

export default function MenuBar() {
  return (
    <>
      <Box sx={{ maxWidth: "lg" }} style={{ margin: "0 auto" }}>
        <AppBar position="static" color="inherit" elevation={0}>
          <Toolbar>
            <Link href="/" sx={{ flexGrow: 1 }}>
              <Typography>MapStocker</Typography>
            </Link>
            <Box sx={{ flexGrow: 0 }}>
              <Button>Login</Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

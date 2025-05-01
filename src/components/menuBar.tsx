"use client";

import React from "react";
import { AppBar, Box, Button, Link, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { type Session } from "next-auth";
import { signOut } from "next-auth/react";
import Image from "next/image";
import AuthButton from "./authButton";

export default function MenuBar({ session }: { session: Session | null }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ maxWidth: "lg" }} style={{ margin: "0 auto" }}>
        <AppBar position="static" color="inherit" elevation={0}>
          <Toolbar>
            <Link href="/" sx={{ flexGrow: 1 }}>
              <Typography>MapStocker</Typography>
            </Link>
            <Box sx={{ flexGrow: 0 }}>
              {session ? (
                <>
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    <Image
                      src={session.user?.image ?? ""}
                      alt={session.user?.name ?? ""}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </Button>
                  <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
                    <MenuItem onClick={() => signOut()}>ログアウト</MenuItem>
                  </Menu>
                </>
              ) : (
                // <Button href="/login">Login</Button>
                <AuthButton />
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

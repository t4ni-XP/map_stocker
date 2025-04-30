import React from "react";
import { AppBar, Box, Button, Link, Toolbar, Typography } from "@mui/material";
import { type Session } from "next-auth";
import { signOut } from "next-auth/react";
import Image from "next/image";

export default function MenuBar({ session }: { session: Session | null }) {
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
                <Image
                  src={session.user?.image ?? ""}
                  alt={session.user?.name ?? ""}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              ) : (
                <Button href="/login">Login</Button>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

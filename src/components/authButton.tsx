"use client";

import { signIn } from "next-auth/react";
import { Button } from "@mui/material";

export default function AuthButton() {
  return <Button onClick={() => signIn("google")}>Login</Button>;
}

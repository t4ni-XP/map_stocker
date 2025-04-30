"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@mui/material";

export default function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <p>{session.user?.name} としてログイン中</p>
        <Button onClick={() => signOut()}>ログアウト</Button>
      </>
    );
  }

  return <Button onClick={() => signIn("google")}>Googleでログイン</Button>;
}

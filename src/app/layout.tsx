// src/layout.tsx
import React from "react";
import { ReactNode } from "react";
import Header from "@/components/Header";
import MenuBar from "@/components/menuBar";
import { Box, Divider } from "@mui/material";
import Footer from "@/components/Footer";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import NextAuthProvider from "@/components/providers";

type Props = {
  children: ReactNode;
};

export default async function Layout({ children }: Props) {
  const session = await getServerSession(authOptions);
  return (
    <html>
      <Header />
      <body>
        <NextAuthProvider>
          <MenuBar session={session} />
          <Divider />
          <Box>{children}</Box>
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}

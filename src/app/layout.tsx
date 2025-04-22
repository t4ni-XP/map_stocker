// src/layout.tsx
import { ReactNode } from "react";
import Header from "@/components/Header";
import MenuBar from "@/components/menuBar";
import { Box, Divider } from "@mui/material";
import Footer from "@/components/Footer";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <html>
      <Header />
      <body>
        <MenuBar />
        <Divider />
        <Box>{children}</Box>
        <Footer />
      </body>
    </html>
  );
}

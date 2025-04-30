import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Googleのプロフィール画像を表示するために追加
    domains: ["lh3.googleusercontent.com"],
  },
};

export default nextConfig;

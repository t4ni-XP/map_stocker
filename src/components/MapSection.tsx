// src/components/MapSection.tsx  （クライアントコンポーネント）
"use client";

import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("./LeafletMap"), { ssr: false });

export default function MapSection({
  positions,
}: {
  positions: { id: string; lat: number; lng: number }[];
}) {
  // サーバーから渡された positions をそのまま LeafletMap に渡す
  return <LeafletMap positions={positions} />;
}

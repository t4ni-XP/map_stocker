// src/components/MapSection.tsx  （クライアントコンポーネント）
"use client";

import React from "react";
import dynamic from "next/dynamic";

// LeafletMap をクライアントのみで読み込む
const LeafletMap = dynamic(() => import("./LeafletMap"), {
  ssr: false,
});

// LeafletMap と同じ型定義を使うと安心です
type MapLocation = { id: string; name: string; lat: number; lng: number };

export default function MapSection({ mapLocations }: { mapLocations: MapLocation[] }) {
  // LeafletMap が受け取る prop 名は `maps` です
  return <LeafletMap mapLocations={mapLocations} />;
}
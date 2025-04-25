// src/components/LeafletMap.tsx
"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { LatLngExpression } from "leaflet";

// 受け取る props の型を定義
type Position = { id: string; lat: number; lng: number };

export default function LeafletMap({ positions }: { positions: Position[] }) {
  // 中心は最初の位置でもいいし、全体の平均座標でもよし
  const center: LatLngExpression = [35.68, 139.76];

  return (
    <MapContainer
      center={center}
      zoom={7}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; 国土地理院"
        url="https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png"
      />
      {positions.map((p) => (
        <Marker key={p.id} position={[p.lat, p.lng]} />
      ))}
    </MapContainer>
  );
}

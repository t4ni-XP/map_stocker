// src/components/LeafletMap.tsx
"use client";

import React from "react";
import "leaflet/dist/leaflet.css";
import "../styles/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import { Link } from "@mui/material";

// 受け取る props の型を定義
type MapLocation = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  mapImages: { id: string; imageUrl: string }[];
};

export default function LeafletMap({ mapLocations }: { mapLocations: MapLocation[] }) {
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
      {mapLocations.map((m) => (
        <Marker key={m.id} position={[m.lat, m.lng]}>
          <Popup className="my-popup">
            <div className="popup-body">
              <Link href={`/map/${m.id}`}>{m.name}</Link>
              <img src={m.mapImages[0]?.imageUrl} alt={m.name} />
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

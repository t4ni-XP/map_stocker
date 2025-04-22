"use client";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { LatLng } from "leaflet";

export default function LeafletMap() {
  const position = new LatLng(35.68, 139.76);
  return (
    <MapContainer
      center={position}
      zoom={7}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }} // ← ここが必須！
    >
      {/* <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      /> */}
      <TileLayer
        attribution='&copy; <a href="https://maps.gsi.go.jp/development/ichiran.html">国土地理院</a>'
        url="https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

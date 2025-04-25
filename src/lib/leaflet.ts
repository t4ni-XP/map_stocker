// src/lib/leaflet.ts
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// public 配下のパスを指定
L.Icon.Default.mergeOptions({
  iconUrl:     "/marker-icon.png",
  iconRetinaUrl: "/marker-icon-2x.png",
  shadowUrl:   "/marker-shadow.png",
});
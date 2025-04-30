// src/types/prisma.ts

// enum Role
export type Role = "USER" | "ADMIN";

// enum terrainType
export type TerrainType = "SPRINT" | "FOREST";

// 中間テーブル
export interface MapImageTag {
  mapImageId: string;
  tagId: string;
  createdAt: string; // ISO文字列
  updatedAt: string;
  // 関連先を含めるなら使う
  mapImage?: MapImage;
  tag?: Tag;
}

// タグモデル
export interface Tag {
  id: string;
  name: string;
  mapImageTags?: MapImageTag[];
}

// ユーザー
export interface User {
  id: string;
  googleId: string;
  email: string;
  name?: string;
  avatarUrl?: string;
  createdAt: string;
  updatedAt: string;
  role?: Role;
  mapImages?: MapImage[];
  mapLocations?: MapLocation[];
}

// 場所（ピンを打つ地点）
export interface MapLocation {
  id: string;
  name: string;
  lat: number;
  lng: number;
  description?: string;
  userId: string;
  createdAt: string;
  mapImages?: MapImage[];
  user?: User;
}

// 地図画像モデル
export interface MapImage {
  id: string;
  eventName: string;
  mapLocationId: string;
  imageUrl: string;
  routedImageUrl?: string | null;
  date: string;
  comment: string;
  memo: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  terrainType: TerrainType;
  mapLocation?: MapLocation;
  user?: User;
  tags?: MapImageTag[];
}

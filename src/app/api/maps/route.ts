// src/app/api/maps/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const data = await request.json();
  const created = await prisma.mapImage.create({
    data: {
      eventName: data.eventName,
      imageUrl: data.imageUrl,
      date: new Date(data.date),
      comment: data.comment,
      memo: data.memo,
      user: {
        connect: {
          id: data.userId,
        },
      },
      mapLocation: { connect: { id: data.locationId } },
      // tags などもここで connect/create
    },
  });
  // 作成後は新しいIDを返してあげればクライアントがリダイレクトできる
  return NextResponse.json({ id: created.id }, { status: 201 });
}

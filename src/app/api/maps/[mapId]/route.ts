// src/app/api/maps/[mapId]/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PUT(request: Request, { params }: { params: { mapId: string } }) {
  const { mapId } = params;
  const data = await request.json();

  // 更新用パラメータを選んで渡す
  const updated = await prisma.mapImage.update({
    where: { id: mapId },
    data: {
      eventName: data.eventName,
      imageUrl: data.imageUrl,
      date: new Date(data.date),
      comment: data.comment,
      memo: data.memo,
      mapLocation: { connect: { id: data.locationId } },
      // tags の更新があればここで…
    },
  });

  return NextResponse.json(updated);
}

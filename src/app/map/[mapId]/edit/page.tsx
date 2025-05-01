import MapForm from "@/components/MapForm";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import { PageProps } from "../../../../../.next/types/app/layout";
import { MapImage } from "@/types/prisma";

export default async function MapEdit(props: PageProps) {
  const { mapId } = await props.params;
  const mapImage = await prisma.mapImage.findUniqueOrThrow({
    select: {
      id: true,
      eventName: true,
      imageUrl: true,
      routedImageUrl: true,
      date: true,
      comment: true,
      memo: true,
      // tags: true,
      mapLocation: {
        select: { name: true },
      },
    },
    where: {
      id: mapId as string,
    },
  });
  const formattedMapImage: MapImage = {
    ...mapImage,
    date: mapImage.date.toISOString(), // もしくは split("T")[0]
  };

  return <MapForm mapImage={formattedMapImage} />;
}

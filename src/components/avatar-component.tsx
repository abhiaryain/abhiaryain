"use client";

import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useData } from "@/context/data-context";

export function AvatarComponent() {
  const { personal } = useData();
  return (
    <Avatar className="size-36 rounded-2xl overflow-hidden">
      <AvatarImage
        loading="lazy"
        src={personal.avatar}
        alt={personal.nickname}
        className="rounded-2xl"
      />
      <AvatarFallback>
        {/* Image as a fallback because Image component support optimizations, caching and blur-hash */}
        <Image
          src={personal.image}
          alt={personal.nickname}
          width={300}
          height={300}
          placeholder="blur"
          blurDataURL="e6EfTi00~qM{_3_3-;xu4n9F00M{j[IUM{~qD%9F-;xu%MofRjxuD%"
          className="aspect-square size-full object-cover rounded-2xl"
          priority
        />
      </AvatarFallback>
    </Avatar>
  );
}

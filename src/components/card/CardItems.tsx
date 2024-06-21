import React from "react";
import { playlists } from "../../lib/data";
import Card from "./Card.tsx";

export default function CardItems() {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:w-[90%] w-full mx-auto gap-3">
      {playlists.map((index) => (
        <Card Title={index.title} Artist={index.artists} Image={index.cover} />
      ))}
    </div>
  );
}

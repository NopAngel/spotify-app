import React from "react";
import { playlists } from "../../lib/data";

export default function SideBarItem() {
  return (
    <div>
      {playlists.map((index, item) => (
        <article className="flex items-center max-w-[100%] gap-3 mt-6 cursor-pointer">
          <div>
            <img
              className="w-[70px] rounded-lg"
              src={index.cover}
              alt={index.title}
            />
          </div>
          <div>
            <h1 className="text-[19px]">{index.title}</h1>
            <p className="opacity-50">
              {index.artists[0]}, {index.artists[1]}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

import React from "react";
import { playlists } from "../../../lib/data";

export default function Card() {
  return (
    <div>
      {playlists.map((index) => (
        <article
          className="flex items-center gap-3 bg-neutral-800/55 rounded-xl backdrop-blur-2xl mt-6"
          style={{ width: "500px" }}
        >
          <div>
            <picture>
              <img
                className="w-[150px] rounded-xl"
                src={index.cover}
                alt={index.title}
              />
            </picture>
          </div>
          <div>
            <h1 className="text-3xl">{index.title}</h1>
            <p className="p-2 opacity-50">{index.artists}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

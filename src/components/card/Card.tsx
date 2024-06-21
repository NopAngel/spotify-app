import React from "react";

export default function Card({
  Image,
  Title,
  Artist,
}: {
  Title: any;
  Image: any;
  Artist: any;
}) {
  return (
    <a href="/playlist/id&playlist1">
      <div className="rounded-lg cursor-pointer w-[200px] bg-neutral-800/55 backdrop-blur-xl">
        <img className="w-full rounded-lg" src={Image} alt={Title} />
        <div className="p-2">
          <h1 className="text-xl font-bold text-center">{Title}</h1>
          <p className="p-2 opacity-70">{Artist[1]}</p>
        </div>
      </div>
    </a>
  );
}

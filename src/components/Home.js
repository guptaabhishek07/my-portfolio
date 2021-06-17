import React from "react";
import image from "../image2.jpg";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Minions"
        className="absolute object-cover w-screen h-5/6"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-blue-800 font-bold cursive leading-none lg:leading-snug home-name">
          Hello. I'm Abhishek.
        </h1>
      </section>
    </main>
  );
}

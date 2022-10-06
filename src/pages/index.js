import React from "react";
import Staging from "./staging";

export default function Home() {
  return (
    <>
      <header></header>
      <main>
        <Staging></Staging>
      </main>
    </>
  )
}

export const Head = () => (
  <>
    <title>99 Generations | By robots, for humans.™</title>
    <link href="../styles/solid.min.css" rel="shortcut icon" type="image/x-icon" />
  </>
)
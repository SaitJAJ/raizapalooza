import Image from "next/image";

import Landing from "./components/Landing";

export default function Home() {
  return (
    <main className="flex">
      <link
        href="https://fonts.googleapis.com/css2?family=Antonio:wght@100..700&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap"
        rel="stylesheet"
      />
      <Landing />
    </main>
  );
}

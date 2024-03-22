import Image from "next/image";
import Header from "./components/Header";

import Landing from "./components/Landing";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex">
        <Landing />
      </main>
    </>
  );
}

"use client";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Background from "./components/Background";

export default function Home() {
  return (
    <>
      <Background>
        <Header />
        <main className="flex">
          <Landing />
        </main>
      </Background>

    </>
  );
}

"use client";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Background from "./components/Background";

export default function Home() {
  return (
    <>
      <Background>
        <Header />
        <main className="flex h-[100vh]">
          <Landing />
        </main>
        <Footer />
      </Background>

    </>
  );
}

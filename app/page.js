"use client";
import Image from "next/image";
import Header from "./components/Header";
//import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Landing from "./components/Landing";
import GalleryPhotos from "./components/GalleryPhotos";
import { StrictMode } from "react";
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

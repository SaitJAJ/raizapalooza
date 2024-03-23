'use client'
import Image from "next/image";
import Header from "./components/Header";
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Landing from "./components/Landing";
import GalleryPhotos from "./components/GalleryPhotos";
import { StrictMode } from "react";

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

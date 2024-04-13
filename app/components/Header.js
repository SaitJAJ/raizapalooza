"use client";
import { useRouter } from "next/navigation";
import '../globals.css'
import '../../styles/tickets.css';
export default function Header() {
  const router = useRouter();
  // investigate the math
  return (
    <header className="flex relative w-full">
      <div className="flex w-20 h-10 border-2 absolute top-10 left-10 bg-element-1 rounded-md">
        <div className="flex w-20 h-10 border-2 relative -top-[0.5rem] -right-1 bg-element-1 rounded-md">
          <button
            className="flex hover:underline pl-1 pr-1 font-bold pt-1 pb-1 bg-element-1 text-center justify-center items-center rounded-md border-2 relative -top-[0.25rem] -right-1"
            type={"button"}
            onClick={() => router.replace("/tickets/")}
          >
            TICKETS
          </button>
        </div>
      </div>
      <input type="checkbox" id="hamburger-checkbox" />
      <label htmlFor="hamburger-checkbox" id="hamburger-checkbox-label" >
        <span></span>
      </label>
      <nav className={'float-right fixed'}>
        <span className="menu">
          <span className="hamburger"></span>
        </span>
        <ul>
          <li> <a href="/">HOME</a> </li>
          <li> <a href="/tickets">TICKETS</a> </li>
          <li> <a href="/about">ABOUT</a> </li>
          <li> <a href="/itenerary">ITENERARY</a> </li>
          <li> <a href="/whozapalooza">WHOZAPALOOZA</a> </li>
          <li> <a href="/gallery">GALLERY</a> </li>
        </ul>
      </nav>
    </header>
  );
}

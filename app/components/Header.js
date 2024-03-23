'use client'
import '../../styles/tickets.css';
import {useRouter} from "next/navigation";
export default function Header() {
    const router = useRouter();
  return (
    <header id='header-tickets'>
      <div id='header-div1'>
        <div id='header-div2'>
          <button id='header-ticket-button' type={'button'} onClick={()=>router.replace('/tickets/')}>
              TICKETS
          </button>
        </div>
      </div>
      <input type="checkbox" id="hamburger-checkbox"/>
      <label htmlFor="hamburger-checkbox" id="hamburger-checkbox-label"><span></span></label>
      <nav>
        <span className="menu"><span className="hamburger"></span></span>
        <ul>
          <li> <a href="/about">ABOUT</a> </li>
          <li> <a href="/itenerary">ITENERARY</a> </li>
          <li> <a href="/whoozapalooza">WHOZAPALOOZA</a> </li>
          <li> <a href="/gallery">GALLERY</a> </li>          
        </ul>
      </nav>
    </header>
  );
}
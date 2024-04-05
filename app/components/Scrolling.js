"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Scrolling({children}) {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    if (scroll) {
      let id = setInterval(() => {
        window.scrollBy({ left: 0, top: 1, behavior: "smooth" });
      }, 500);
      return () => clearInterval(id);
    }
  }, [scroll]);
  const [jump, setJump] = useState(false);
  useEffect(() => {
    if (jump) {
      let id = setInterval(() => {
        window.scrollBy({ left: 0, top: 380, behavior: "smooth" });
      }, 5000);
      return () => clearInterval(id);
    }
  }, [jump]);
  return (
    <>
      {children}
    </>
    //   <div className={"h-[350vh] w-full absolute"}>
    //     <Image alt={"Tall redwood Tree"} src={"/tallTower.jpg"} fill={true} />
    //   </div>
    //   <div className={"fixed top:0 flex justify-around w-full"}>
    //     <button
    //       className={
    //         "border-2 border-gray-600 border-opacity-20 px-4 rounded-md " +
    //         (scroll
    //           ? " bg-green-200 bg-opacity-40"
    //           : "bg-amber-200 bg-opacity-40")
    //       }
    //       onClick={() => setScroll(!scroll)}
    //     >
    //       Scroll
    //     </button>
    //     <button
    //       className={
    //         "border-2 border-gray-600 border-opacity-20 px-4 rounded-md " +
    //         (jump
    //           ? " bg-green-200 bg-opacity-40"
    //           : "bg-amber-200 bg-opacity-40")
    //       }
    //       onClick={() => setJump(!jump)}
    //     >
    //       Jump
    //     </button>
    //   </div>
  );
}

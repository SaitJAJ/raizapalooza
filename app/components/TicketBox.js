"use client";
import Ticket from "@/components/Ticket";
import { useEffect, useState } from "react";

export default function TicketBox({ selected, setSelected }) {
  return (
    <div className={"flex h-[100vh] justify-around w-full"}>
      <Ticket
        selected={selected === "earlybird"}
        id={"earlybird"}
        select={() => setSelected("earlybird")}
      >
        <div id="regularTicket" className="flex flex-col">
          <div className="flex w-full border-b-2 border-b-element-1 justify-center items-center">
            <h2>EARLY BIRD</h2>
          </div>
          <div className="flex w-full justify-start">
            <p>Text</p>
          </div>
        </div>
      </Ticket>
      <Ticket
        selected={selected === "door"}
        id={"door"}
        select={() => setSelected("door")}
      >
        <div
          id="regularTicket"
          className="flex flex-col w-full justify-center items-center"
        >
          <div className="flex w-full border-b-2 border-b-element-1 justify-center items-center">
            <h2>REGULAR</h2>
          </div>
          <div className="flex w-full justify-start">
            <p>Text</p>
          </div>
        </div>
      </Ticket>
    </div>
  );
}

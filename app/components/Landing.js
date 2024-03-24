import Image from "next/image";
import BlueSwirl from "../../public/BlueSwirl.png";

import YellowSwirl from "../../public/YellowSwirl.png";

import GreenSwirl from "../../public/GreenSwirl.png";

import YellowShine from "../../public/YellowShine.png";
import GreenDuotone from "../../public/GreenDuotone.png";
import GreenDuotone2 from "../../public/GreenDuotone2.png";
import BlueDuotone from "../../public/BlueDuotone.png";
import BlueDuotone2 from "../../public/BlueDuotone2.png";
import YellowDuotone2 from "../../public/YellowDuotone2.png";
import YellowDuotone3 from "../../public/YellowDuotone3.png";
import FancyTitle from "@/components/layout/FancyTitle";
import Background from "./Background";
import '../../styles/home.css';

export default function Landing() {
  return (
    <div className="landing-inner">
      <FancyTitle title={"Raizapalooza"}/>
      <Background/>
      <div className="dark-overlay"></div>
      <div className="info">
        <div className='info-section'>
          <p id="date-text">APRIL 13, 2024</p>
        </div>
        <div className='info-section'>
          <p id='location-text' ><a href='https://www.scubajaysbar.com/' target='_blank'>@ Scuba Jay's Bar</a></p>
          <p id='eighteen-only'>18+ only</p>
        </div>

      </div>

    </div>
  );
}

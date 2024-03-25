import FancyTitle from "@/components/layout/FancyTitle";
import Background from "./Background";
import '../../styles/home.css';

export default function Landing() {
  return (
    <>
        <div className="landing-inner">
          <FancyTitle title={"Raizapalooza"}/>
          <div className="info relative">
            <div className="dark-overlay w-full h-full top-0 left-0 z-10"></div>
            <div className='info-section'>
              <p className='z-20' id="date-text">APRIL 13, 2024</p>
            </div>
            <div className='info-section'>
              <p className='z-20' id='location-text' ><a href='https://www.scubajaysbar.com/' target='_blank'>@ Scuba Jay&apos;s Bar</a></p>
              <p className='z-20' id='eighteen-only'>18+ only</p>
            </div>
          </div>
        </div>

    </>

  );
}

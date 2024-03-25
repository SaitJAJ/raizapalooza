import FancyTitle from "@/components/layout/FancyTitle";
import Background from "./Background";
import '../../styles/home.css';

export default function Landing() {
  return (
    <>
        <div className="landing-inner">
          <div className="dark-overlay w-1/2 h-1/2 max-lg:top-[25vh] top-[40vh] max-lg:left-[15vw] left-[25vw] z-0"></div>
          <FancyTitle title={"Raizapalooza"}/>
          <div className="info">
            <div className='info-section'>
              <p className='z-20' id="date-text">APRIL 13, 2024</p>
            </div>
            <div className='info-section'>
              <p className='z-20 ' ><a className='text-element-2 text-4xl underline hover:no-underline font-bold' href='https://www.scubajaysbar.com/' target='_blank'>@ Scuba Jay&apos;s Bar</a></p>
              <p className='z-20 text-2xl font-bold'>18+ only</p>
            </div>
          </div>
        </div>

    </>

  );
}

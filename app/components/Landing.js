import FancyTitle from "@/components/layout/FancyTitle";
import Background from "./Background";
import '../../styles/home.css';

export default function Landing() {
  return (
    <>
      <Background />
      <div className="landing-inner">
        <FancyTitle title={"Raizapalooza"}/>
        <div className="info">
          <div className='info-section'>
            <p id="date-text">APRIL 13, 2024</p>
          </div>
          <div className='info-section'>
            <p id='location-text' ><a href='https://www.scubajaysbar.com/' target='_blank'>@ Scuba Jay&apos;s Bar</a></p>
            <p id='eighteen-only'>18+ only</p>
          </div>
        </div>
      </div>
    </>

  );
}

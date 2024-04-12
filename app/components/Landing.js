import RaizapaloozaTitle from "@/components/layout/RaizapaloozaTitle";
import Background from "./Background";
import '../../styles/home.css';

export default function Landing() {
  return (
    <>
      <div className="border-2 flex flex-col justify-center items-center h-[100%] w-[100vw]">
        <div className="dark-overlay w-1/2 h-1/2 max-lg:top-[25vh] top-[40vh] max-lg:left-[15vw] left-[25vw] -z-10"></div>
        <RaizapaloozaTitle title={"Raizapalooza"}/>
        <div className="info bg-background bg-opacity-50 p-5">
          <div className='info-section'>
            <p className='z-20 pt-[15vh] text-4xl text-center font-bold max-lg:text-2xl' id="date-text">APRIL 13, 2024</p>
          </div>
          <div className='info-section flex flex-col justify-center items-center gap-5'>
            <p className='z-20' ><a className='text-element-2 text-2xl max-lg:text-xl text-center underline hover:no-underline font-bold' href='https://www.instagram.com/scubajaysbar/' target='_blank'>@scubajaysbar</a></p>
            <p className='z-20 text-xl font-bold max-lg:text-sm'>18+ only</p>
            <p className='z-20 text-xl font-bold max-lg:text-sm'>302 10 St NW, Calgary, AB</p>
          </div>
        </div>
        <button className=" bg-element-1 mt-5 z-10 p-5"><a className='text-element-2 font-extrabold font-josefin-sans max-lg:text-2xl text-4xl hover:underline' href='/tickets'>GET TICKETS NOW</a></button>
      </div>
    </>

  );
}

import RaizapaloozaTitle from "@/components/layout/RaizapaloozaTitle";
import Background from "./Background";
import '../../styles/home.css';

export default function Landing() {
  return (
    <>
      <div className=" flex flex-col justify-center items-center h-[100%] w-[100vw] overflow-clip">
        <div className="dark-overlay w-1/2 h-1/2 max-lg:top-[25vh] top-[40vh] max-lg:left-[15vw] left-[25vw] -z-10"></div>
        <RaizapaloozaTitle title={"Raizapalooza"}/>
        <div className="background-radial-gradient absolute top-[10vh] info-bg w-[100%] h-[100%]"></div>
        <div className="p-5 mt-[15vh]">
          <div className='info-section flex flex-col justify-center items-center gap-5'>
            <p className='text-5xl text-center font-bold max-lg:text-4xl mt-[10vh]' id="date-text">APRIL 13, 2024</p>
            <p className='z-20' ><a className='text-element-2 text-3xl max-lg:text-2xl text-center underline hover:no-underline font-bold' href='https://www.instagram.com/scubajaysbar/' target='_blank'>@scubajaysbar</a></p>
            <p className='z-20 text-4xl font-bold max-lg:text-sm'>18+ only</p>
            <p className='z-20 text-4xl font-bold max-lg:text-sm text-center'>302 10 St NW, Calgary, AB</p>
          </div>
        </div>
        <button className=" bg-element-1 mt-5 z-10 p-5"><a className='text-element-2 font-extrabold font-josefin-sans max-lg:text-2xl text-4xl hover:underline' href='/tickets'>GET TICKETS NOW</a></button>
      </div>
    </>
  );
}

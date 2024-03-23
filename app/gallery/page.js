import GalleryPhotos from "../components/GalleryPhotos";
import GalleryHeader from "../components/GalleryHeader";
import Header from "../components/Header";
import '../../styles/gallery.css';

export default function Page() {
  return (
    <>
      <Header />
      <div id='gallery'>
        <GalleryHeader />
        <GalleryPhotos />
      </div>
      <div className="w-full absolute top-0 -z-10 h-screen bg-[url('../public/LandingBackground.png')] bg-contain"></div>
      <div className="w-full absolute top-[100vh] -z-10 h-screen bg-[url('../public/LandingBackground.png')] bg-contain"></div>
      <div className="w-full absolute top-[200vh] -z-10 h-screen bg-[url('../public/LandingBackground.png')] bg-contain"></div>
    </>
  );
}
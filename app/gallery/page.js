import GalleryPhotos from "../components/GalleryPhotos";
import GalleryHeader from "../components/GalleryHeader";
import Header from "../components/Header";
import '../../styles/gallery.css';
import Background from "../components/Background";
import RaizapaloozaTitle from "@/components/layout/RaizapaloozaTitle";
import FancyTitle from "@/components/FancyTitle";

export default function Page() {
  return (
    <>
    <Background>
      <Header />
      <div className='mt-[10vh]' id='gallery'>
        <FancyTitle title={'Gallery'}/>
        <GalleryPhotos />
      </div>
    </Background>
    </>
  );
}
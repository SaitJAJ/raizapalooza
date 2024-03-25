import GalleryPhotos from "../components/GalleryPhotos";
import GalleryHeader from "../components/GalleryHeader";
import Header from "../components/Header";
import '../../styles/gallery.css';
import Background from "../components/Background";

export default function Page() {
  return (
    <>
    <Background>
      <Header />
      <div id='gallery'>
        <GalleryHeader />
        <GalleryPhotos />
      </div>
    </Background>
    </>
  );
}
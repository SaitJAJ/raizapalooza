'use client'
import '../../styles/gallery.css';
import Image from 'next/image';
import DesktopGalleryDisplay from './DesktopGalleryDisplay';
import PhoneGalleryDisplay from './PhoneGalleryDisplay';
import TabletGalleryDisplay from './TabletGalleryDisplay';
import { useEffect, useState } from 'react';

export default function GalleryPhotos() {
  const [vwSize, setVwSize] = useState(null);

  useEffect(() => {
    setVwSize(window.innerWidth);
  }, []);

  return (
    <>
      {vwSize<=800 ? <PhoneGalleryDisplay /> : 800<vwSize&&vwSize<1200 ? <TabletGalleryDisplay /> : <DesktopGalleryDisplay />}
    </>
  );
}
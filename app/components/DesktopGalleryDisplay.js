'use client'
import Image from 'next/image';

export default function DesktopGalleryDisplay() {


  return (
      <>
        {/*<div className={'fixed w-[80vw] h-[60vh] border-2 m-auto top-0'}>*/}

        {/*</div>*/}
        <div className='w-screen min-h-screen flex flex-col gap-8 justify-center items-center'>
          <div className="grid grid-cols-12 grid-rows-7 gap-8 w-[90%] min-h-screen">
            <div className="border-2 col-span-2 relative row-span-2 col-start-1 row-start-2">
              <Image alt='img' src={'/Gallery Photos/0.jpg'} fill='true' className='object-cover'/>
            </div>
            <div className="border-2 row-span-2 relative col-start-3 row-start-1">
              <Image alt='img' src={'/Gallery Photos/1.jpg'} fill='true' className='object-cover'/>
            </div>
            <div className="border-2 row-span-2 relative col-start-4 row-start-2">
              <Image alt='img' src={'/Gallery Photos/2.jpg'} fill='true' className='object-cover'/>
            </div>
            <div className="border-2 col-span-3 relative row-span-3 col-start-1 row-start-4">
              <Image alt='img' src={'/Gallery Photos/3.jpg'} fill='true' className='object-cover'/>
            </div>
            <div className="border-2 col-start-3 relative row-start-3">
              <Image alt='img' src={'/Gallery Photos/4.jpg'} fill='true' className='object-cover' />
            </div>
            <div className="border-2  max-lg:row-start-4 col-span-2 relative row-span-2 col-start-5 row-start-1">
              <Image alt='img' src={'/Gallery Photos/5.jpg'} fill='true' className='object-cover'/>
            </div>
            <div className="border-2 col-span-2 relative row-span-2 col-start-5 row-start-4">
              <Image alt='img' src={'/Gallery Photos/6.jpg'} fill='true' className='object-cover' />
            </div>
            <div className="border-2 col-span-2 relative row-span-2 col-start-4 row-start-6">
              <Image alt='img' src={'/Gallery Photos/7.jpg'} fill='true' className='object-cover' />
            </div>
            <div className="border-2 col-span-2 relative row-span-2 col-start-8 row-start-2">
              <Image alt='img' src={'/Gallery Photos/8.jpg'} fill='true' className='object-cover' />
            </div>
            <div className="border-2 col-start-7 relative row-start-2">
              <Image alt='img' src={'/Gallery Photos/9.jpg'} fill='true' className='object-cover' />
            </div>
            <div className="border-2 col-start-10 relative row-start-2">
              <Image alt='img' src={'/Gallery Photos/10.jpg'} fill='true' className='object-cover' />
            </div>
            <div className="border-2 row-span-2 relative col-start-10 row-start-3">
              <Image alt='img' src={'/Gallery Photos/11.jpg'} fill='true' className='object-cover' />
            </div>
            <div className="border-2 col-span-2 relative row-span-2 col-start-11 row-start-2">
              <Image alt='img' src={'/Gallery Photos/12.jpg'} fill='true' className='object-cover' />
            </div>
            <div className="border-2 col-span-3 relative row-span-3 col-start-10 row-start-5">
              <Image alt='img' src={'/Gallery Photos/13.jpg'} fill='true' className='object-cover' />
            </div>
            <div className="border-2 col-span-3 relative col-start-10 row-start-1">
              <Image alt='img' src={'/Gallery Photos/14.jpg'} fill='true' className='object-cover' />
            </div>
            <div className="border-2 col-span-2 relative row-span-2 col-start-7 row-start-4">
              <Image alt='img' src={'/Gallery Photos/15.jpg'} fill='true' className='object-cover' />
            </div>
            <div className="border-2 col-span-4 relative row-span-2 col-start-6 row-start-6">
              <Image alt='img' src={'/Gallery Photos/16.jpg'} fill='true' className='object-cover' />
            </div>
            <div className="border-2 col-span-3 relative col-start-1 row-start-7">
              <Image alt='img' src={'/Gallery Photos/17.jpg'} fill='true' className='object-cover' />
            </div>
            <div className="border-2 row-span-2 relative col-start-4 row-start-4">
              <Image alt='img' src={'/Gallery Photos/18.jpg'} fill='true' className='object-cover' />
            </div>
            <div className="border-2 col-span-3 relative col-start-5 row-start-3">
              <Image alt='img' src={'/Gallery Photos/19.jpg'} fill='true' className='object-cover' />
            </div>
            <div className="border-2 col-start-9 relative row-start-5">
              <Image alt='img' src={'/Gallery Photos/20.jpg'} fill='true' className='object-cover' />
            </div>
            <div className="border-2 col-start-12 relative row-start-4">
              <Image alt='img' src={'/Gallery Photos/21.jpg'} fill='true' className='object-cover' />
            </div>
          </div>
          <div className="grid grid-cols-12 grid-rows-7 gap-8 w-[90%] min-h-screen">
            <div className="border-2 col-span-2 relative row-span-2 col-start-1 row-start-2">
              <Image alt='img' src={'/Gallery Photos/22.jpg'} fill='true' className='object-cover'/>
            </div>
            <div className="border-2 row-span-2 relative col-start-3 row-start-1">
              <Image alt='img' src={'/Gallery Photos/23.jpg'} fill='true' className='object-cover'/>
            </div>
            <div className="border-2 row-span-2 relative col-start-4 row-start-2">
              <Image alt='img' src={'/Gallery Photos/24.jpg'} fill='true' className='object-cover'/>
            </div>
            <div className="border-2 col-span-3 relative row-span-3 col-start-1 row-start-4">
              <Image alt='img' src={'/Gallery Photos/25.jpg'} fill='true' className='object-cover'/>
            </div>
            <div className="border-2 col-start-3 relative row-start-3">
              <Image alt='img' src={'/Gallery Photos/26.jpg'} fill='true' className='object-cover' />
            </div>
            <div className="border-2 col-span-2 relative row-span-2 col-start-5 row-start-1">
              <Image alt='img' src={'/Gallery Photos/27.jpg'} fill='true' className='object-cover'/>
            </div>
            <div className="border-2 col-span-2 relative row-span-2 col-start-5 row-start-4">
              <Image alt='img' src={'/Gallery Photos/28.jpg'} fill='true' className='object-cover' />
            </div>
            <div className="border-2 col-span-2 relative row-span-2 col-start-4 row-start-6">
              <Image alt='img' src={'/Gallery Photos/29.jpg'} fill='true' className='object-cover' />
            </div>
            <div className="border-2 col-span-2 relative row-span-2 col-start-8 row-start-2">
              <Image alt='img' src={'/Gallery Photos/30.jpg'} fill='true' className='object-cover' />
            </div>
            <div className="border-2 col-start-7 relative row-start-2">
              <Image alt='img' src={'/Gallery Photos/31.jpg'} fill='true' className='object-cover' />
            </div>
            <div className="border-2 col-start-10 relative row-start-2">
              <Image alt='img' src={'/Gallery Photos/32.jpg'} fill='true' className='object-cover' />
            </div>
            <div className="border-2 row-span-2 relative col-start-10 row-start-3">
              <Image alt='img' src={'/Gallery Photos/33.jpg'} fill='true' className='object-cover' />
            </div>
            <div className="border-2 col-span-2 relative row-span-2 col-start-11 row-start-2">
              <Image alt='img' src={'/Gallery Photos/34.jpg'} fill='true' className='object-cover' />
            </div>
            <div className="border-2 col-span-3 relative row-span-3 col-start-10 row-start-5">
              <Image alt='img' src={'/Gallery Photos/35.jpg'} fill='true' className='object-cover' />
            </div>
            <div className="border-2 col-span-3 relative col-start-10 row-start-1">
              <Image alt='img' src={'/Gallery Photos/36.jpg'} fill='true' className='object-cover' />
            </div>
            <div className="border-2 col-span-2 relative row-span-2 col-start-7 row-start-4">
              <Image alt='img' src={'/Gallery Photos/37.jpg'} fill='true' className='object-cover' />
            </div>
            <div className="border-2 col-span-4 relative row-span-2 col-start-6 row-start-6">
              <Image alt='img' src={'/Gallery Photos/38.jpg'} fill='true' className='object-cover' />
            </div>
            <div className="border-2 col-span-3 relative col-start-1 row-start-7">
              <Image alt='img' src={'/Gallery Photos/39.jpg'} fill='true' className='object-cover' />
            </div>
            <div className="border-2 row-span-2 relative col-start-4 row-start-4">
              <Image alt='img' src={'/Gallery Photos/40.jpg'} fill='true' className='object-cover' />
            </div>
            <div className="border-2 col-span-3 relative col-start-5 row-start-3">
              <Image alt='img' src={'/Gallery Photos/41.jpg'} fill='true' className='object-cover' />
            </div>
            <div className="border-2 col-start-9 relative row-start-5">
              <Image alt='img' src={'/Gallery Photos/42.jpg'} fill='true' className='object-cover' />
            </div>
            <div className="border-2 col-start-12 relative row-start-4">
              <Image alt='img' src={'/Gallery Photos/43.jpg'} fill='true' className='object-cover' />
            </div>
          </div>
        </div>

      </>
    );
}
'use client';
import * as React from 'react';
import { AboutHome, Header, NameSection, ParallaxImage, SnapCursor, Testimonials, Footer } from '@/components';

export default function Home() {
  return (
    <>
      <Header />
      <main className='h-[200vh]'>
        <NameSection />
        <ParallaxImage priority src='/images/man.webp' alt='' />
        <AboutHome />
        <SnapCursor href='/google'>
          <ParallaxImage priority src='/images/girl.webp' alt='' />
        </SnapCursor>

        <div className='grid gap-8 px-16 py-12 grid-cols-[1fr,_0.75fr]'>
          <h1 className='text-[9rem] font-semibold leading-[100%] tracking-[-7px]'>Camera</h1>
          <div className='flex flex-col justify-between'>
            <p className='text-muted leading-[160%] text-[1.25rem] font-medium'>A cutting-edge digital platform designed to revolutionize the way <br /> people interact with technology.</p>
            <div className='flex gap-2'>
              <div className='bg-black text-white px-[0.75rem] py-[0.5rem] rounded-full text-sm font-medium'>Digital Design</div>
              <div className='bg-black text-white px-[0.75rem] py-[0.5rem] rounded-full text-sm font-medium'>2023</div>
            </div>
          </div>
        </div>

        <SnapCursor href='/google'>
          <ParallaxImage priority src='/images/manwithtv.webp' alt='' />
        </SnapCursor>

        <div className='grid gap-8 px-16 py-12 grid-cols-[1fr,_0.75fr]'>
          <h1 className='text-[9rem] font-semibold leading-[100%] tracking-[-7px]'>Noise</h1>
          <div className='flex flex-col justify-between'>
            <p className='text-muted leading-[160%] text-[1.25rem] font-medium'>A cutting-edge digital platform designed to revolutionize the way <br /> people interact with technology.</p>
            <div className='flex gap-2'>
              <div className='bg-black text-white px-[0.75rem] py-[0.5rem] rounded-full text-sm font-medium'>Digital Design</div>
              <div className='bg-black text-white px-[0.75rem] py-[0.5rem] rounded-full text-sm font-medium'>2023</div>
            </div>
          </div>
        </div>

        <SnapCursor href='/google'>
          <ParallaxImage priority src='/images/robotglove.webp' alt='' />
        </SnapCursor>

        <div className='grid gap-8 px-16 py-12 grid-cols-[1fr,_0.75fr]'>
          <h1 className='text-[9rem] font-semibold leading-[100%] tracking-[-7px]'>Robot</h1>
          <div className='flex flex-col justify-between'>
            <p className='text-muted leading-[160%] text-[1.25rem] font-medium'>A cutting-edge digital platform designed to revolutionize the way <br /> people interact with technology.</p>
            <div className='flex gap-2'>
              <div className='bg-black text-white px-[0.75rem] py-[0.5rem] rounded-full text-sm font-medium'>Digital Design</div>
              <div className='bg-black text-white px-[0.75rem] py-[0.5rem] rounded-full text-sm font-medium'>2023</div>
            </div>
          </div>
        </div>

        <Testimonials />
        <Footer />

      </main>
    </>
  )
}

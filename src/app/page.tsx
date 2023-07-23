'use client';
import * as React from 'react';
import { AboutHome, Header, NameSection, ParallaxImage, SnapCursor } from '@/components';

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
        <AboutHome />
        <SnapCursor href='/google'>
          <ParallaxImage priority src='/images/manwithtv.webp' alt='' />
        </SnapCursor>
      </main>
    </>
  )
}

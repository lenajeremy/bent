'use client';
import * as React from 'react';
import { Header, NameSection, ParallaxImage } from '@/components';

export default function Home() {
  return (
    <>
      <Header />
      <main className='h-[200vh]'>
        <NameSection />
        <ParallaxImage priority src='/images/man.webp' alt='' />
      </main>
    </>
  )
}

import * as React from 'react';
import { Button, Menu } from '..';
import Link from 'next/link';

const Footer = () => {
    return (
        <>
            <Prefooter />
            <footer className='p-16 grid grid-cols-3 gap-16 text-xl text-off-white bg-black'>
                <div>
                    <p className='text-muted-inverse text-lg mb-8'>(Pages)</p>
                    <div className='flex flex-col gap-4 font-semibold leading-[130%] tracking-[-.5px]'>
                        <Link href='/'>Home</Link>
                        <Link href='/'>About</Link>
                        <Link href='/'>Contact</Link>
                    </div>
                </div>
                <div>
                    <p className='text-muted-inverse text-lg mb-8'>(CNS)</p>
                    <div className='flex flex-col gap-4 font-semibold leading-[130%] tracking-[-.5px]'>
                        <Link href='/'>Work</Link>
                        <Link href='/'>Work Singlet</Link>
                        <Link href='/'>Blog</Link>
                        <Link href='/'>Blog Single</Link>
                        <Link href='/'>Shop</Link>
                        <Link href='/'>Shop Single</Link>
                    </div>
                </div>
                <div>
                    <p className='text-muted-inverse text-lg mb-8'>(Utility Pages)</p>
                    <div className='flex flex-col gap-4 font-semibold leading-[130%] tracking-[-.5px]'>
                        <Link href='/'>404 Error</Link>
                        <Link href='/'>Password</Link>
                        <Link href='/'>Styleguide</Link>
                        <Link href='/'>Licensing</Link>
                        <Link href='/'>Changelog</Link>
                    </div>
                </div>
            </footer>
        </>
    )
}

const Prefooter = () => {
    return (
        <div className='px-16 py-32 bg-black text-off-white text-center'>
            <h2 className='text-[2rem] font-semibold leading-[120%] tracking-[-.5px] mb-4'>(Connect)</h2>
            <h1 className='text-[9rem] font-semibold leading-[100%] tracking-[-7px] mb-12'>Let&apos;s talk</h1>
            <Button className='bg-off-white text-black text-xl p-4 px-6 rounded-full font-semibold leading-[110%] border-2 border-black'>
                <p>Get in Touch</p>
            </Button>
        </div>
    )
}

export default Footer;
import * as React from 'react';
import type { ImageProps } from 'next/image';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type ParallaxImageProps = {

} & ImageProps

const ParallaxImage = (props: ParallaxImageProps) => {

    const ref = React.useRef<HTMLDivElement>(null)
    const containerRef = React.useRef<HTMLDivElement>(null)
    const tl = gsap.timeline();

    React.useEffect(() => {
        tl.to(ref.current, {
            scrollTrigger: {
                scrub: 1,
                trigger: containerRef.current,
                start: 'top 450px',
            },
            scale: 1,
        });
        tl.to(ref.current, {
            scrollTrigger: {
                scrub: true,
                trigger: containerRef.current,
                start: '300px 300px',
            },
            y: 300,
        })
    })

    return (
        <div ref={containerRef} className='image_container h-[90vh] overflow-clip relative'>
            <div ref={ref} className='scale-[1.4]'>
                <Image {...props} alt={props.alt} width={1680} height={800} className='object-[0px,-100px]'/>
                <div style={{ backgroundSize: '150px 150px' }} className='bg-[url(/images/noise.png)] bg-repeat absolute h-full w-full top-0 opacity-50'></div>
            </div>
        </div>
    )
}

export default ParallaxImage;
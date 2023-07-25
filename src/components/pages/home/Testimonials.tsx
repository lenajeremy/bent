import * as React from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

const Testimonials = () => {

    const containerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (containerRef.current) {
            gsap.from(containerRef.current?.querySelectorAll('.line.vertical'), {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 500px',
                },
                height: 0,
                stagger: 0.5
            })

            gsap.from(containerRef.current?.querySelectorAll('.line.horizontal'), {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 500px',
                },
                width: 0,
                stagger: 0.5,
                duration: 1
            })
        }
    }, [])

    return (
        <div ref={containerRef}>
            <div className='h-[2px] bg-black mx-16 line horizontal' />

            <div className='p-16 grid grid-cols-[0.5fr,_2px,_1fr] gap-16'>
                <div className='flex justify-between'>
                    <h3 className='text-[2rem] leading-[120%] font-semibold tracking-[-.5px]'>(My Clients)</h3>
                    <svg className='h-10 w-10 fill-black' xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24"><path d="M14.5895 16.0032L5.98291 7.39664L7.39712 5.98242L16.0037 14.589V7.00324H18.0037V18.0032H7.00373V16.0032H14.5895Z"></path></svg>
                </div>

                <div className='bg-black line vertical' />

                <div className='flex flex-col gap-16'>
                    <div className='grid grid-cols-[1fr,_2px,_1fr] gap-16'>
                        <div>
                            <h2 className='text-[2.75rem] font-semibold leading-[110%] tracking-[-1px] text-black mb-4'>Exceptional digital design and user experience.</h2>
                            <p className='text-muted text-lg leading-[160%] font-medium mb-4'>Bent&apos;s digital design skills are unmatched. He transformed our website into a beautiful and functional work of art that exceeded our expectations.</p>
                            <div className='flex gap-4'>
                                <Image src='/images/man.webp' alt='' width={60} height={60} className='rounded-full h-[60px] w-[60px] object-cover' />
                                <div>
                                    <h4 className='font-semibold text-lg leading-[140%]'>John Smith</h4>
                                    <h4 className='font-semibold text-lg leading-[140%] text-muted'>Motion Design</h4>
                                </div>
                            </div>
                        </div>

                        <div className='bg-black line vertical' />

                        <div>
                            <h2 className='text-[2.75rem] font-semibold leading-[110%] tracking-[-1px] text-black mb-4'>Art direction that captured our essence.</h2>
                            <p className='text-muted text-lg leading-[160%] font-medium mb-4'>Bent&apos;s interaction design made our app user-friendly and intuitive. His creativity and attention to detail resulted in a product that exceeded our expectations.</p>
                            <div className='flex gap-4 items-center'>
                                <Image src='/images/man.webp' alt='' width={60} height={60} className='rounded-full h-[60px] w-[60px] object-cover' />
                                <div>
                                    <h4 className='font-semibold text-lg leading-[140%]'>John Smith</h4>
                                    <h4 className='font-semibold text-lg leading-[140%] text-muted'>Motion Design</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-black h-[2px] line horizontal' />

                    <div className='grid grid-cols-[1fr,_2px,_1fr] gap-16'>
                        <div>
                            <h2 className='text-[2.75rem] font-semibold leading-[110%] tracking-[-1px] text-black mb-4'>Bent&apos;s interaction design expertise delivered.</h2>
                            <p className='text-muted text-lg leading-[160%] font-medium mb-4'>Bent&apos;s motion design is exceptional. He brought our brand to life with stunning animations that captivated our audience.</p>
                            <div className='flex gap-4'>
                                <Image src='/images/man.webp' alt='' width={60} height={60} className='rounded-full h-[60px] w-[60px] object-cover' />
                                <div>
                                    <h4 className='font-semibold text-lg leading-[140%]'>John Smith</h4>
                                    <h4 className='font-semibold text-lg leading-[140%] text-muted'>Motion Design</h4>
                                </div>
                            </div>
                        </div>

                        <div className='bg-black line vertical' />

                        <div>
                            <h2 className='text-[2.75rem] font-semibold leading-[110%] tracking-[-1px] text-black mb-4'>Captivating motion design that brought our brand to life.</h2>
                            <p className='text-muted text-lg leading-[160%] font-medium mb-4'>Bent&apos;s digital design skills are unmatched. He transformed our website into a beautiful and functional work of art that exceeded our expectations.</p>
                            <div className='flex gap-4'>
                                <Image src='/images/man.webp' alt='' width={60} height={60} className='rounded-full h-[60px] w-[60px] object-cover' />
                                <div>
                                    <h4 className='font-semibold text-lg leading-[140%]'>John Smith</h4>
                                    <h4 className='font-semibold text-lg leading-[140%] text-muted'>Motion Design</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;
import * as React from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';


type SnapCursorProps = {
    href: string;
    children: React.ReactNode
}

const SnapCursor = (props: SnapCursorProps) => {

    const linkRef = React.useRef<HTMLAnchorElement>(null);
    const buttonRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (linkRef.current !== null) {

            linkRef.current.addEventListener('mouseenter', (e) => {
                gsap.to(buttonRef.current, {
                    scale: 1,
                    ease: 'easein',
                    x: 0,
                    y: 0,
                })

                gsap.fromTo('.arrow', {
                    x: -40,
                    y: 40,
                    opacity: 0
                }, {
                    x: 0, y: 0, opacity: 1,
                    delay: 0.2, ease: 'easeout'
                })
            })

            linkRef.current.addEventListener('mouseleave', () => {
                gsap.to(buttonRef.current, {
                    scale: 0,
                    ease: 'easein',
                    delay: 0.2
                })

                gsap.to('.arrow', {
                    x: 40,
                    y: -40,
                    opacity: 0,
                    ease: 'easein'
                })
            })


            linkRef.current.addEventListener('mousemove', (e) => {
                if (linkRef.current && buttonRef.current) {
                    const { height: parentHeight, width: parentWidth } = linkRef.current.getBoundingClientRect();
                    const { height: buttonHeight, width: buttonWidth } = buttonRef.current.getBoundingClientRect();

                    const origin = {
                        x: (parentWidth / 2) - (buttonWidth / 2),
                        y: (parentHeight / 2) - (buttonHeight / 2)
                    }

                    gsap.to(buttonRef.current, {
                        x: (e.clientX - origin.x) / 9,
                        y: (e.clientY - origin.y) / 7,
                        ease: 'easeinout',
                        duration: 0.8
                    })
                }
            })
        }
    })

    return (
        <div className='relative'>
            <Link href={props.href} ref={linkRef} className='cursor-none'>
                {props.children}

                <div className='absolute h-full w-full top-0 left-0 right-0 bottom-0 pointer-events-none flex items-center justify-center'>
                    <div ref={buttonRef} className='w-20 h-20 rounded-full bg-black text-white flex items-center justify-center overflow-hidden scale-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" className='w-8 h-8 arrow pointer' viewBox="0 0 24 24"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default SnapCursor
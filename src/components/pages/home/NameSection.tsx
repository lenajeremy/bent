import * as React from 'react';

const NameSection = () => {
    return (
        <div className='bg-white text-black pt-20 pb-8 px-16'>
            <div className='mb-6 text-[9rem] tracking-[-7px] leading-none font-semibold'>
                <h1>Bent Lindberg</h1>
                <h1>Digital Designer</h1>
            </div>
            <div className='font-semibold flex items-center justify-between text-[2rem]'>
                <h3>(Berlin, Germany)</h3>
                <h3>Scroll down</h3>
            </div>
        </div>
    )
}

export default NameSection;
import * as React from 'react';
import { Button } from '..';

const Header = () => {
    return (
        <header className='fixed w-full top-0 flex items-center justify-end px-8 pt-8 gap-2 z-50'>
            <Button className='bg-black text-white text-xl p-4 w-[58px] rounded-full leading-[110%] border-2 border-black'>5</Button>
            <Button className='bg-black text-white text-xl p-4 px-6 rounded-full font-semibold leading-[110%] border-2 border-black'>
                <p>Menu</p>
            </Button>
        </header>
    )
}

export default Header;
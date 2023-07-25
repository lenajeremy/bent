import * as React from 'react';
import ReactDOM from 'react-dom'


const Menu = () => {
    return (
        <div className='bg-black h-screen w-screen fixed top-0 left-0 bottom-0 right-0 z-[60]'>
            <h1 className='text-2xl text-off-white'>Hello World</h1>
        </div>
    )
}


const MenuWithPortal = () => {
    const [mounted, setMounted] = React.useState<boolean>(false);

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null;

    return ReactDOM.createPortal(<Menu />, document.getElementById('menu')!);

}

export default MenuWithPortal;


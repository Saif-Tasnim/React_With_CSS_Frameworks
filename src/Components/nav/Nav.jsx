import { useState } from 'react';
import Link from '../Link/Link';
import '../nav/nav.css';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Nav = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        {
            id: 1,
            name: 'Home',
            path: '/'
        },
        {
            id: 2,
            name: 'About',
            path: '/about'
        },
        {
            id: 3,
            name: 'Products',
            path: '/products'
        },
        {
            id: 4,
            name: 'Contact',
            path: '/contact'
        },
        {
            id: 5,
            name: 'Blog',
            path: '/blog'
        }
    ];


    return (
        <nav>
            <button className='float-right md:hidden' onClick={() => setOpen(!open)}>

                <span>
                    {open === true ? <XMarkIcon className="h-8 w-8 text-red-700" /> :
                    <Bars3Icon className="h-8 w-8 text-amber-800" />
                     }
                </span>

            </button>

            <ul className ={`md:flex float-right absolute  duration-700  md:static  right-0 bg-orange-700 py-3 pl-4 pr-3 ${open ? 'top-10' : '-top-56'}`}>
                {
                    routes.map(route =>
                        <Link key={route.id}
                            route={route}
                        >  </Link>)
                }
            </ul>
        </nav>
    );
};

export default Nav;
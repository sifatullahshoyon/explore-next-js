'use client'
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const session = useSession();
    const pathName = usePathname();
    const router = useRouter();
    const links = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Contact',
            path: '/contact'
        },
        {
            title: 'Blogs',
            path: '/blogs'
        },
        {
            title: 'Dashboard',
            path: '/dashboard'
        },
    ];

    const handler = () => {
        router.push('/login');
    };

    if(pathName.includes('dashboard'))
        return (
           
            <div>
            <header>
                <nav>
                  <ul className='flex space-x-4 bg-violet-500'>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                  </ul>
                </nav>
              </header>
              <div className="min-h-screen p-10">
              {/* {children} */}
              </div>
              <footer className="px-5 py-4 bg-violet-500">
                <p className="text-center">This is a footer</p>
              </footer>
            </div>
         
        );

  return (
    <nav className="flex justify-between items-center px-5 py-4 bg-amber-500">
      <h1 className="text-3xl">logo</h1>
      <ul className="flex justify-around gap-10">
        {links?.map(link => (<Link key={link.path} href={link.path} className={`${pathName === link.path && "text-white font-bold"}`}>{link.title}</Link>))}
      </ul>
      {session.status === 'authenticated' ? <button onClick={handler} className="px-3 py-2 rounded bg-white text-amber-500">Login</button> : <button onClick={handler} className="px-3 py-2 rounded bg-white text-amber-500">Logout</button>}
    </nav>
  );
};

export default Navbar;

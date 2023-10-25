import React, { useContext, useState } from 'react'
import {useRouter} from 'next/navigation'
import UserContext from '@/context/userContext';
import Image from 'next/image';
import Link from 'next/link';

const MobileMenu = ({logOut}) => {
    const context=useContext(UserContext);
    const router=useRouter();

    const [open, setOpen] = useState(false);

const links = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "About", url: "/about" },
    { id: 3, title: "Contact", url: "/contact" },
  ];

  const handleLogOut=()=>{
    logOut();
  }

  return (
        <div>
          <Image
            src={open ? "/close.png" : "/open.png"}
            alt=""
            priority
            width={40}
            height={40}
            onClick={() => setOpen(!open)}
            className="cursor-pointer"
          />
           {open && (
            <div className=" bg-blue-500 absolute left-0 top-15 w-full flex flex-col gap-8 items-center justify-center text-xl z-10">
              {links.map((item) => (
                <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
                  {item.title}
                </Link>
              ))}
              {
                    context?.user && (
                      <div className='text-center flex flex-col gap-8'>
                        <Link href="/add-task" className='hover:text-blue-200' onClick={() => setOpen(false)}>Add Task</Link>
                        <Link href="/show-task" className='hover:text-blue-200' onClick={() => setOpen(false)}>Show Tasks</Link>
                        </div>
                    )
                }
            <div className='mb-10 text-center flex flex-col gap-8'>
                {
                    context?.user && (
                      <>
                        <Link href="/#" onClick={() => setOpen(false)}>{context.user.name}</Link>
                        <button onClick={handleLogOut}>Log Out</button>
                      </>
                    )
                }
                {
                    !context?.user && (
                      <>
                        <Link href="/log-in" onClick={() => setOpen(false)}>Login</Link>
                        <Link href="/sign-up" onClick={() => setOpen(false)}>Sign-Up</Link>
                        </>
                    )
                }
            </div>
            </div>
           )}
        </div>

  )
}

export default MobileMenu
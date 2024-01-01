import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
    <header className='flex justify-between items-center text-center my-5'>
        <Link className='text-primary font-semibold' href={"/"}>ST PIZZA</Link>
    <nav className='space-x-8 text-gray-500 font-semibold'>
    <Link href={"/"}>Home</Link>
    <Link href={"/menu"}>Menu</Link>
    <Link href={"/about"}>About</Link>
    <Link href={"/contact"}>Contact</Link>
    <Link className='bg-primary text-white py-2 px-6 rounded-full' href={"/login"}>Longin</Link>
    </nav>
    </header>
    </>
  )
}

export default Header
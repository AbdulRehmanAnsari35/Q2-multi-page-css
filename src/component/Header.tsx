import React from 'react'
import Link from 'next/link'
import { MdOutlineShoppingCart } from "react-icons/md";
const Header = () => {
  return (
    <header className='header'>
        <h1 className='logo'>Laptop world</h1>
        <nav>
            <Link href="/">Home</Link>
            <Link href="about">About</Link>
            <Link href="laptop">Laptop</Link>
            <Link href="contect">Contect</Link>
            <MdOutlineShoppingCart  style={{color: "white", fontSize: "20px"}}/>
        </nav>
    </header>
  )
}

export default Header

import Link from 'next/link'
import React from 'react'
import {GiHamburgerMenu} from "react-icons/gi"

const NAV_MENU : string[]= ["Home", "Details", "Feedback", "Support"]

const handler= () =>{
  alert("HI")
}
const Header = () => {
  return (
    <header className={`flex justify-between items-center`}>
      <div>
        <Link href={'/about'}>
          <a className='text-xl font-black'>Open</a>
        </Link>
      </div>
      <nav className="hidden ">
        {NAV_MENU.map((menu,key) => <Link key={key} href={`/${menu}`}><a>{menu.toUpperCase()}</a></Link>)}
        <button className="">Contact Us</button> 
      </nav>
      <div className={`bg-slate-100 p-1`} onClick={handler}>
        <GiHamburgerMenu className={`cursor-pointer`} size={'30px'} color='black'/>
      </div>
    </header>
  )
}

export default Header

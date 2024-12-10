import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='text-white h-28 w-full flex '>
        <img className='h-10 px-20 my-7' src="https://templatekit.jegtheme.com/burgry/wp-content/uploads/sites/132/2021/07/logo.png" alt="Burgry" />   
       <ul className=' w-full flex justify-end' >
        <li className='text-base p-10 '><Link to="/">Home</Link></li>
        <li className='text-base p-10'><Link to="/about">About Us</Link></li>
        <li className='text-base p-10'> <Link to="/menu">Menu</Link></li>
        <li className='text-base p-10 '><Link to="/contact">Contact</Link></li>
       </ul>
       <div className='w-66 px-10 '>
       <button className=' text-black h-14 w-40 my-6 rounded-xl'>Shop Online</button>
       </div>
    </div> 
    </>

  )
}
export default Navbar

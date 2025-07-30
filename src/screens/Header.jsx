import React from 'react'

function Header() {
  return (
    <div className='w-full h-full'>
        <div className=' h-[5vh] flex flex-row bg-orange-300 '>
      <p className='w-3/4  flex justify-center font-bold text-white items-center'>Free worldwide shipping on all shoes</p>
      <button className=' bg-black bg-opacity-10 w-1/4'>x</button>
    </div>
    <div className=' h-[5vh] flex flex-row justify-between bg-orange-300 lg:hidden '>
      <p className='  flex justify-center font-bold text-white items-center'>Free worldwide shipping on all shoes</p>
    <div></div>
      <button className=' bg-transparent bg-black bg-opacity-10 w-[5vh]'>x</button>
    </div>
    </div>
  )
}

export default Header

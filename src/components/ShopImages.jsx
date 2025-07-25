import React from 'react'

function ShopImages({image1,image2,image3}) {
  return (
    <div className='flex flex-col w-full h-full'>
        <div className='flex flex-row lg:hidden'>
            <img src={image1} />
            <img src={image2}/>
        </div>
        <div className='flex flex-row '>
            <img src={image1} />
            <img src={image2}/>
             <img src={image3}/>
        </div>
      
      
    </div>
  )
}

export default ShopImages

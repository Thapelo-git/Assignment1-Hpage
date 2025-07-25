import React from 'react'

function AboutImages({image1,image2,image3,image4}) {
  return (
    <div className='flex flex-col lg:flex-row w-full h-full'>
      <div>
        <img src={image1}/> 
      <img src={image2}/>
      </div>
      <div>
         <img src={image3}/> 
      <img src={image4}/>
      </div>
    </div>
  )
}

export default AboutImages

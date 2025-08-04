import React, { useEffect, useState } from 'react'
import { data } from '../Data'
import { Link, useParams } from 'react-router-dom'
function Details() {
   const { Name } = useParams();
//    const itemId =Number(id)
  const [item, setItem] = useState(null);
    
  useEffect(() => {
    const found = data.find(d => d.Name === Name);
    setItem(found);
  }, [Name]);

  if (!item) {
  return <div className="p-4">
   Item not found for Name "{Name}".<br/>
    <Link to="/">Back to list</Link>
  </div>;
}
  return (
    <div className='flex flex-row gap-2 p-4 '>
      <img src={item.img} className='w-1/2'/>
      <div className='w-1/2 flex flex-col justify-start'>
        <p>{item.Name}</p>
        <p>{item.price}</p>
      </div>
    </div>
  )
}

export default Details

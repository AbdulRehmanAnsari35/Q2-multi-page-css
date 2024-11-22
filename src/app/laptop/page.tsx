import React from 'react'
import Image from 'next/image';

const laptop = () => {

  const lpdata= [
    { id: 1, name: 'Macbook', price: 80000, description: 'APPLE Macbook M4', image:'/card01.png'},
    { id: 2, name: 'Lenevo', price: 40000, description: 'Lenevo thinkpad i5 12th gen', image:'/card02.png'},
    { id: 3, name: 'Chrome book', price: 30000, description: 'chrome book intel celeron 11th gen', image:'/card03.png'},
    { id: 4, name: 'HP Elitebook', price: 18000, description: 'hp Elitebook intel Xeon dual core', image:'/card04.png'},
    { id: 5, name: 'DELL Insprion', price: 65000, description: 'DELL Insprion i7 8th gen 2GB GPU', image:'/card05.png'},
    { id: 6, name: 'MSI Alienware', price: 100000, description: 'MSI gaming i912th gen 8GB gpu', image:'/card06.png'},
  ]
  return (
    <div>
    <div className='laptop'>
      {lpdata.map((laptop) =>(
       <div key={laptop.id} className='lp-card'>
        {/* use image component for optimization*/}
        <Image 
              src={laptop.image} 
              alt={laptop.name} 
              width={300} // Set a width for the image
              height={200} // Set a height for the image
            />
        <h3>{laptop.name}</h3>
        <p>{laptop.description}</p>
        <div className='price'>${laptop.price}</div>
        <button>Add to cart</button>
       </div> 
      ))}
      </div>  
    </div>
  )
}

export default laptop

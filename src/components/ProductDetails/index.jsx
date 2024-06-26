import React, { useContext } from 'react'
import {XMarkIcon} from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';
import './style.css';

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext)
  console.log('Detalles:', context.productToShow)  

  return (
    <aside 
        
        className={`${context.isProductDetailOpen ? 'flex':'hidden'} product-detail flex-col fixed right-1 bottom-1 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)]`}>
        <div className="flex justify-between items-center">
            <h2 className='font-medium text-xl ml-2'>Detail</h2>
            <XMarkIcon 
              className='h-6 w-6 text-black-500 cursor-pointer'
              onClick={()=>context.closeProductDetail()}/> 
            
        </div>
        <figure className='px-6 '>
           <img className='w-full h-full rounded-lg'
                src={context.productToShow.images} 
                alt={context.productToShow.title}
                />
        </figure>
        <p className='flex flex-col p-6'>
          <span className='font-medium text-2xl '
          >{context.productToShow.tittle}</span>
          <span className='font-medium text-md'>${context.productToShow.price}</span>
          <span className='font-light text-sm'>{context.productToShow.description}</span>
        </p>
    </aside>
  )
}

export default ProductDetail
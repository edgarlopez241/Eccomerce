import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {XMarkIcon} from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';
import './style.css'
import OrderCard from '../OrderCard ';
import { totalPrice } from '../../utils';

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)
  
  const handleDelete = (id) =>{
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProducts)
  }

  const handleCheckout = () => {
    const orderToAdd = {
      date:'25-03-2024',
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts) 
    }
    context.setCartOrders([...context.cartOrders, orderToAdd])
    context.setCartProducts([])
    context.setSearchByTitle(null)
  }

  return (
    <aside 
        
        className={`${context.isCheckoutSideMenuOpen ? 'flex':'hidden'} checkout-side-menu flex-col fixed right-1 bottom-1 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)]`}>
        <div className="flex justify-between items-center p-6">
            <h2 className='font-medium text-xl ml-2'>My Order</h2>
            <XMarkIcon 
              className='h-6 w-6 text-black-500 cursor-pointer'
              onClick={()=>context.closeCheckoutSideMenu()}/> 
            
        </div>
        <div className='px-6 overflow-y-scroll flex-1'>
        {
          context.cartProducts.map(product => (
            <OrderCard 
              key = {product.id}
              id={product.id}
              title = {product.title}
              imgUrl = {product.imgUrl}
              price = {product.price}
              handleDelete = {handleDelete}
            />
            ))
        }
        </div>
        <div className='px-6 mb-6'>
          <p className='flex justify-between items-center mb-2'>
            <span className='font-medium'>Total:</span>
            <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
          </p>
          <Link to='/my-order/last'>
          <button className='w-full bg-black text-white py-3 rounded-lg' onClick={()=>handleCheckout()}>proceder</button>
          </Link>
        </div>
    </aside>
  )
}

export default CheckoutSideMenu
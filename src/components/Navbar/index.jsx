import React, { useContext } from 'react'
import {NavLink} from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import mercadolibre from '../../assets/mercadolibre.svg'

const NavBar = () => {
  const context = useContext(ShoppingCartContext)  
  const activeStyle = "underline underline-offset-4"
    
  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-[#eed130]'>
      <ul className='flex items-center gap-3'>
      <li className='font-semibold text-lg'>
          <NavLink 
            to="/"
            onClick={()=>context.setSearchByCategory()}
          >
              <img
                src={mercadolibre}
                className='mr-1'
                width={40}
                height={40}
                alt='logo'
              />
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/clothes"
            onClick={()=>context.setSearchByCategory('clothes')}
            className={`({isActive})=>
                    isActive ? activeStyle : undefined`
                    
                    
          }
            >
              Ropa
          </NavLink>
        </li>
        <li>
          <NavLink 
                    to="/electronics"
                    onClick={()=>context.setSearchByCategory('electronics')}
                    className={({isActive})=>
                    isActive ? activeStyle : undefined
          }
          >
             Electronicos
          </NavLink>
        </li>
        <li>
          <NavLink 
              to="/furniture"
              onClick={()=>context.setSearchByCategory('furniture')}
              className={({isActive})=>
                    isActive ? activeStyle : undefined
          }
              >
              Mobiliario
          </NavLink>
        </li>
        <li>
          <NavLink 
              to="/miscellaneous"
              onClick={()=>context.setSearchByCategory('miscellaneous')}
              className={({isActive})=>
                    isActive ? activeStyle : undefined
          }
              >
              Miscelanea
          </NavLink>
        </li>
        <li>
          <NavLink 
              to="/toys"
              onClick={()=>context.setSearchByCategory('toys')}              
              className={({isActive})=>
                    isActive ? activeStyle : undefined
          }
              >
              Juguetes
          </NavLink>
        </li>
        <li>
          <NavLink 
              to="/others"
              onClick={()=>context.setSearchByCategory('others')}              
              className={({isActive})=>
                    isActive ? activeStyle : undefined
          }
              >
              Otros
          </NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-3'>
      <li>
          edgarlopez241@mail.com
        </li>
        <li>
          <NavLink 
              to="/my-account"
              className={({isActive})=>
                    isActive ? activeStyle : undefined
          }
              >
              Mi cuenta
          </NavLink>
        </li>
        <li>
          <NavLink 
              to="/my-orders"
              className={({isActive})=>
                    isActive ? activeStyle : undefined
          }
              >
              Mis ordenes
          </NavLink>
        </li>
        <li>
          <NavLink 
              to="/my-order"
              className={({isActive})=>
                    isActive ? activeStyle : undefined
          }
              >
              Mi orden actual
          </NavLink>
        </li>
        <li>
          <NavLink 
              to="/sign-in"
              className={({isActive})=>
                    isActive ? activeStyle : undefined
          }
              >
              Registrarse
          </NavLink>
        </li>
        <li className='flex items-center'>
         <ShoppingCartIcon className='h-6 w-6 mr-1 '/>
         <div > 
         {context.cartProducts.length}
         </div>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
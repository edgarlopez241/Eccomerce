import { ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const OrderCards = props => {
  const {  totalPrice, totalProducts} = props
  
  return (
    <div className='flex justify-between items-center mb-3 border border-black rounded-lg  p-4 w-80 '>
      <p className='flex justify-between w-full'>
        <div className='flex flex-col'>
        <span className='font-light'>25/03/2024</span>
        <span className='font-light'>{totalProducts} articles</span>
        </div>
        <div className='flex items-center gap-2'> 
        <span className='font-medium text-2xl'>{totalPrice}</span>
        <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer'>

        </ChevronRightIcon>
        </div>
      </p>
    </div>
  )
}

export default OrderCards
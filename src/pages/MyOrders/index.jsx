import { useContext } from "react"
import Layout from "../../components/Layouts"
import OrderCards from "../../components/OrdersCard"
import { ShoppingCartContext } from "../../Context"
import { Link } from "react-router-dom"
 

const MyOrders = () => {
  const context = useContext(ShoppingCartContext)

  return (
   <Layout>
      <div className="flex w-80 items-center relative justify-center mb-4">
        <h1 className="text-xl font-medium ">
          My Orders
        </h1>
        
      </div>
      


      {context.cartOrders.map((order, index)=>(
        <Link 
        key={index}
          to={`/my-order/${index}`}>  
        <OrderCards 
        
        totalPrice={order.totalPrice}
        totalProducts={order.totalProducts}
      />
      </Link>
      ))}
      
    </Layout>
  )
}

export default MyOrders
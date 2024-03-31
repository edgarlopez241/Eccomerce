import { BrowserRouter, useRoutes} from 'react-router-dom';
import { ShoppingCartProvider } from '../../Context';
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound'
import SignIn from '../SignIn';
import NavBar from '../../components/Navbar';
import CheckoutSideMenu from '../../components/CheckoutSideMenu';
import './App.css';

const AppRoutes = () =>{
  let routes = useRoutes([
    { 
      path:'/', 
      element:<Home/>
    },
    { 
      path:'/clothes', 
      element:<Home/>
    },
    { 
      path:'/electronics', 
      element:<Home/>
    },
    { 
      path:'/furnitures', 
      element:<Home/>
    },
    { 
      path:'/toys', 
      element:<Home/>
    },
    { 
      path:'/others', 
      element:<Home/>
    },
    {
      path:'/my-order',
      element:<MyOrder />
    },
    {
      path:'/sign-in',
      element:<SignIn />
    },
    {
      path:'/my-orders',
      element:<MyOrders />
    },
    {
      path:'/my-order/last',
      element:<MyOrder />
    },
    {
      path:'/my-order/:id',
      element:<MyOrder />
    },
    {
      path:'/my-account',
      element:<MyAccount />
    },
    {
      path:'/*',
      element:<NotFound />
    }
  ])
  return routes
}

const App = () => {


  return (
    <ShoppingCartProvider>
        <BrowserRouter>
          <AppRoutes />
          <NavBar />
          <CheckoutSideMenu />
        </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App

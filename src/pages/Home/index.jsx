import Layout from "../../components/Layouts"
import Card from "../../components/Card"
import {  useContext } from "react"
import ProductDetails from "../../components/ProductDetails"
import { ShoppingCartContext } from "../../Context"

function Home(){
    const context = useContext(ShoppingCartContext)
    const renderView = () => {
        
           if(context.filteredItems?.length >  0){
           return(
            context.filteredItems?.map( item => (
                <Card 
                   key = {item.id}
                   data={item} />
                   )) 
                
            ) } else {
            return (
            <div>
                No existe
            </div>
            )
        }
        
    }

    return(
        <Layout>
            <div className="flex items-center justify-center relative w-80 mb-4">
                <h1 className="font-medium text-xl"> Productos exclusivos</h1>
            </div>
            <input 
                type="text" 
                placeholder="Buscar un producto" 
                className="rounded-lg border border-black w-80 p-4 mb-5 focus:outline-none" onChange={(event)=> context.setSearchByTitle(event.target.value)} />
           <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg"> 
            {
                renderView()
            }
           </div>
           <ProductDetails/> 
        </Layout>
    )
}

export default Home
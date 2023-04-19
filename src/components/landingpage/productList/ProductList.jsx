import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import  Tshirt  from './misteri.jpg'
import Sticker from './adopt.png'
import './ProductList.css'
const GetProductList = gql`
  query GetBarang {
    barang {
         id
         product_name
         product_category
         product_freshness
         aditional_information
         price
     }
   }
 `
const ProductList = () => {

    const { data } = useQuery(GetProductList)
     useEffect(() => {
      //   console.log('loading', loading);
        console.log('data ', data);
      //   console.log('error = ', error);
     })

   return(
      <div className="wrap">
      <h1 className="judul">Product List</h1>
      <div className="wrap-one">
         {
            !data ? 
            <>
            <p>Loading... </p><br />
            <img src={Sticker} />
            </>
             :
            data.barang.map((x)=> {
               return(
                     <div className="card">
                        <div className="images">
                           <img src={Tshirt} alt="tshirt" />
                        </div>
                        <div className="description">
                           <h2>{x.product_name}</h2>
                           <p>{x.aditional_information}</p>
                           <button className="btn">detail view</button>
                        </div>
                     </div>
               )
            })
         }
      </div>
      </div>
   )
}

export default ProductList
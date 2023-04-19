import { useSelector, useDispatch } from "react-redux"
import { hapusData, editData } from "../../../../store/dataSlice"
const Tabel = () => {

   const products = useSelector((state)=> state.product.product)
   const dispatch = useDispatch()
   const styleButtonHapus = {
      backgroundColor: "red", color: "white", display: "flex", alignItems:"center", justifyContent: "center", border: "none", padding: "5px", borderRadius: "5px", width: "60px", marginRight: "5px", marginTop: "20px"
   }

   const styleButtonEdit = {
      backgroundColor: "green", color: "white", border: "none", padding: "5px", borderRadius: "5px", width: "60px", marginTop: "20px", marginRight: "10px"
   }
   
   return (
      <div>
         <table id="myTable" cellSpacing="0" cellPadding="20" class="mt-5 m-auto mb-5 text-center" style={{boxShadow: "10px 10px 10px rgba(0,0,0,0.2)", width: "90%"}} >
            <tr style={{backgroundColor: "#3A98B9", color: "#fff"}}>
                <th style={{padding: "20px"}}>id</th>
                <th style={{padding: "10px"}}>Product Name</th>
                <th style={{padding: "10px"}}>Product Category</th>
                <th style={{padding: "10px"}}>Image of Product</th>
                <th style={{padding: "10px"}}>Product Branches</th>
                <th style={{padding: "10px"}}>Additional Description</th>
                 <th style={{padding: "10px"}}>Product Price</th>
                <th style={{padding: "10px"}}>Action</th>
            </tr>
   {products.length && 
        products.map((data)=> {
      return ( 
      <tr key={data.id} style={{padding: "20px"}}>
         <td style={{padding: "15px"}}>{data.id}</td>
         <td>{data.productName}</td>
         <td>{data.productCategory}</td>
         <td>
            belum tersedia
         </td>
         <td>{data.productBranches}</td>
         <td>{data.addDescrip}</td>
         <td>{data.productPrice}</td>
         <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <button onClick={() => dispatch(hapusData({id: data.id}))} style={styleButtonHapus}>delete</button>
            <button style={styleButtonEdit} onClick={()=> dispatch(editData({id: data.id}))}>Edit</button>
         </div>
      </tr>
      )})
   }
        </table>
      </div>
   )
}

export default Tabel
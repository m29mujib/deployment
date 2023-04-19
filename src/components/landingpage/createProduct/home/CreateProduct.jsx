
import Judul from '../judul/Judul'
import Form from '../form/Form'
import Tabel from '../tabel/Tabel'
// import { useState } from 'react'

function CreateProduct(){
   //  const [data, setData] = useState([])

   //  const onSubmit = (valueData) => {
   //   setData(data => [...data, valueData])
   // }
     
   //   const deleteData = (id) => {
   //    if(window.confirm("Apakah anda yakin akan menghapus ?")){
   //       setData((val)=> val.filter((tod)=> {
   //          return tod.id !== id
   //       }))
   //    }
   // }

   return(
      <div className='wrapper'>
               <Judul/>
               <Form name="Ini form props"/>
               <Tabel/>
      </div>
   )
}
 
export default CreateProduct
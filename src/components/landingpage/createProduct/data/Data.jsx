
import { useParams } from "react-router-dom"

const Data = () => {
   let { id } = useParams();
   return (
      <div>
         <h1>Test id : {id}</h1>
      </div>
   )
}
export default Data
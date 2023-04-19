import { Link } from 'react-router-dom'
import '../../../components/style.css'
import Gambar from '../../../components/hero-img.png.png'
const Main = () => {
   return (
      <div className="fluid">
        <main className="fluid-main">
            <h1>Better Solution For Your Busines</h1>
            <p>We are team of talented designer making websites with boostrap</p>
            <Link className="btn-1" to='/createProduct'>Get Started</Link>
            <button className="btn-2">Watch Video</button>
        </main>
        <div className="gambar">
            <img src={Gambar}/>
        </div>
    </div>  
   )
}

export default Main
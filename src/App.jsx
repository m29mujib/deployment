import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './components/landingpage/home/LandingPage';
import CreateProduct from './components/landingpage/createProduct/home/CreateProduct'
import Navbar from './components/landingpage/createProduct/navbar/Navbar';
import Data from './components/landingpage/createProduct/data/Data';
// import { useEffect } from 'react';
import Features from './components/landingpage/features/Features';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  //     useEffect(()=> {
  //     alert("Welcome")
  //  }, [])
    return (
        <BrowserRouter>
         <Provider store={store}>
         <Navbar/>
           <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/createProduct' element={<CreateProduct />}>
                 <Route path=":id" element={<Data />} />
            </Route>
            <Route path='/features' element={<Features/>}/>
            <Route path='/pricing' element={<h1>Halo Pricing</h1>}/>
            <Route path='/faqs' element={<h1>Halo FaQs</h1>}/>
            <Route path='/about' element={<h1>Halo About</h1>}/>
          </Routes>
        </Provider>
        </BrowserRouter>
    );
}
 

export default App;
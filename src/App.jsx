import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproduct from './components/Addproduct';
import Getproducts from './components/Getproducts';
import Mpesapayment from './components/Mpesapayment';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Videos from './components/Videos';

const App = () => {
  return(
      <BrowserRouter>
        {/* navigation goes here  */}
        <Navbar/>

        {/* routes goes here  */}
        <Routes>
          <Route path='/' element={<Getproducts/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/addproduct' element={<Addproduct/>} />
          <Route path='/mpesapayment' element={<Mpesapayment/>}/>
          <Route path='/videos' element={<Videos/>} />
        </Routes>

        {/* footer goes here  */}
          <Footer />
      </BrowserRouter>
  )
}
export default App
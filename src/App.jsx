import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproduct from './components/Addproduct';
import Getproducts from './components/Getproducts';
import Mpesapayment from './components/Mpesapayment';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return(
      <BrowserRouter>
        {/* navigation goes here  */}
        <nav className='bg-primary text-center p-2'>
          <Link to="/" className='btn btn-dark text-light m-2'>Get Products</Link>
          <Link to="/signup" className='btn btn-dark text-light m-2'>Signup</Link>
          <Link to="/signin" className='btn btn-dark text-light m-2'>Signin</Link>
          <Link to="/addproduct" className='btn btn-dark text-light m-2'>Add Products</Link>
        </nav>

        {/* routes goes here  */}
        <Routes>
          <Route path='/' element={<Getproducts/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/addproduct' element={<Addproduct/>} />
          <Route path='/mpesapayment' element={<Mpesapayment/>}/>
        </Routes>
      </BrowserRouter>
  )
}
export default App
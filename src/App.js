import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import 'antd/dist/reset.css';
import './App.css';
import Home from './pages/home/home';
import Products from './pages/products/products';
import Cart from './pages/cart/cart';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Bills from './pages/bill/bill';
import Customers from './pages/customers/customers';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
            <ProtectedRouter>
              <Home />
              
            </ProtectedRouter>
            } />
          <Route path="/products" element={
            <ProtectedRouter>
              <Products />
            </ProtectedRouter>
            } />
          <Route path="/cart" element={
            <ProtectedRouter>
              <Cart />
            </ProtectedRouter>
            } />
            <Route path="/bills" element={
            <ProtectedRouter>
              <Bills />
            </ProtectedRouter>
            } />
            <Route path="/customers" element={
            <ProtectedRouter>
              <Customers />
            </ProtectedRouter>
            } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

export function ProtectedRouter({children}) {
  if(localStorage.getItem("auth")) {
    return children;
  } else {
    return <Navigate to="/login" />
  }
}
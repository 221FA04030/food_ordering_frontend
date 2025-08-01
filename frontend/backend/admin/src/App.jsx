import React from 'react'
import Navbar from './component/Sidebar/Navbar/Navbar'
import Sidebar from './component/Sidebar/Sidebar'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Order from './pages/list/add/Orders/Order'
import Add from './pages/list/add/orders/add'
import List from './pages/list/list'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
    <hr />
    <div className="app-content">
      <Sidebar/>
      <Routes>
        <Route path="/add" element={<Add/>}/>
        <Route path="/list" element={<List/>}/>
        <Route path="/add" element={<Order/>}/>
      </Routes>
    </div>
    </div>
  )
}

export default App

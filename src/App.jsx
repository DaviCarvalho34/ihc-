
import './App.scss';
import { BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";
import { Dashboard } from './components/dashboard/Dashboard';
import { Products } from './components/products/Products';
import Sidebar from './components/sidebar/Sidebar';
import RightSide from './components/rightSide/RightSide';
import { Categories } from './components/categories/Categories';
import { Customers } from './components/customers/Customers';
import { Employees } from './components/employees/Employees';
import { Supliers } from './components/Suppliers/Supliers';

function App() {
  
  return (
    <div className="App">
      <div className="AppGlass">
        <Router>
          <Sidebar />
          <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/category" element={<Categories />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/supliers" element={<Supliers />} />
        </Routes>
        </Router>      
          <RightSide />
        <div></div>
      </div>
    </div>
  )
}

export default App

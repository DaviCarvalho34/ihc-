
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
import { Clients } from './components/Clients/Clients';
import { Carriers } from './components/carriers/Carriers';
import { Companies } from './components/Companies/Companies';
import { TaxOperations } from './components/TaxOperations/TaxOperations';

function App() {
  
  return (
    <div className="App">
      <div className="AppGlass">
        <Router>
          <Sidebar />
          <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="/categorias" element={<Categories />} />
          <Route path="/usuarios" element={<Customers />} />
          <Route path="/funcionarios" element={<Employees />} />
          <Route path="/fornecedores" element={<Supliers />} />
          <Route path="/clientes" element={<Clients />} />
          <Route path="/transportadoras" element={<Carriers />} />
          <Route path="/empresas" element={<Companies />} />
          <Route path="/operacoes-fiscais" element={<TaxOperations />} />
        </Routes>
        </Router>      
          <RightSide />
        <div></div>
      </div>
    </div>
  )
}

export default App


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
import { Accounts } from './components/Accounts/Accounts';
import { Services } from './components/Services/Services';
import { Orders } from './components/Orders/Orders';
import { Ecommerce } from './components/Ecommerce/Ecommerce';
import { Budget } from './components/Budget/Budget';
import { ServiceOrder } from './components/ServiceOrder/ServiceOrder';
import { TaxInvoice } from './components/TaxInvoice/TaxInvoice';
import { InvoiceService } from './components/invoiceService/InvoiceService';
import { Pdv } from './components/PDV/Pdv';
import { Report } from './components/Report/Report';

function App() {
  
  return (
    <div className="App">
      <div className="AppGlass">
        <Router>
          <Sidebar />
          <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="/posicao-de-venda" element={<Orders />} />
          <Route path="/categorias" element={<Categories />} />
          <Route path="/usuarios" element={<Customers />} />
          <Route path="/funcionarios" element={<Employees />} />
          <Route path="/fornecedores" element={<Supliers />} />
          <Route path="/clientes" element={<Clients />} />
          <Route path="/transportadoras" element={<Carriers />} />
          <Route path="/empresas" element={<Companies />} />
          <Route path="/operacoes-fiscais" element={<TaxOperations />} />
          <Route path="/plano-de-contas" element={<Accounts />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/orcamentos" element={<Budget />} />
          <Route path="/ordem-de-servico" element={<ServiceOrder />} />
          <Route path="/notas-fiscais" element={<TaxInvoice />} />
          <Route path="/notas-fiscais-servico" element={<InvoiceService />} />
          <Route path="/pdv" element={<Pdv />} />
          <Route path="/relatorios" element={<Report />} />
        </Routes>
        </Router>      
          <RightSide />
        <div></div>
      </div>
    </div>
  )
}

export default App

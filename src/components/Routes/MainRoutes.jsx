import { BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";
import { Dashboard } from '../dashboard/Dashboard'
import { Products } from '../products/Products';
import Sidebar from '../sidebar/Sidebar';
import RightSide from '../rightSide/RightSide';
import { Categories } from '../categories/Categories';
import { Customers } from '../customers/Customers';
import { Employees } from '../employees/Employees';
import { Supliers } from '../Suppliers/Supliers';
import { Clients } from '../Clients/Clients';
import { Carriers } from '../carriers/Carriers';
import { Companies } from '../Companies/Companies';
import { TaxOperations } from '../TaxOperations/TaxOperations';
import { Accounts } from '../Accounts/Accounts';
import { Services } from '../Services/Services';
import { Orders } from '../Orders/Orders';
import { Ecommerce } from '../Ecommerce/Ecommerce';
import { Budget } from '../Budget/Budget';
import { ServiceOrder } from '../ServiceOrder/ServiceOrder';
import { TaxInvoice } from '../TaxInvoice/TaxInvoice';
import { InvoiceService } from '../invoiceService/InvoiceService';
import { Pdv } from '../PDV/Pdv';
import { Report } from '../Report/Report';
import { CashierLock } from '../CashierLock/CashierLock';

export const MainRoutes = () => {
    return(
        <>
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
          <Route path="/fechamento-caixa" element={<CashierLock />} />
        </Routes>
        </Router>      
          <RightSide />
        </>
    )
}
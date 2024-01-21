import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Transactions } from "./pages/Transactions";
import { Customers } from "./pages/Customers";
import { Check_Transactions } from "./pages/Check_Transactions";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";


const App = () => {
  return ( 
      <>
    <BrowserRouter>
    <Navbar />
      <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/check_Transactions" element={<Check_Transactions />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
  );
};

export default App;


  

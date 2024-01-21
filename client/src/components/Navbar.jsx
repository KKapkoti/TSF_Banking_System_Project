import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
   return (
     <>
       <header>
         <div className="container">
           <div className="logo-brand">
                <img
                  src="/image/logo2.png"
                  alt="transactions"
                  width="40"
                  height="auto"
                />
             {/* <NavLink to="/">The Sparks Foundation</NavLink> */}
           </div>

           <nav>
             <ul>
               <li>
                 <NavLink to="/"> Home </NavLink>
               </li>
               <li>
                 <NavLink to="/about"> About </NavLink>
               </li>
               <li>
                <NavLink to="/customers"> Customers </NavLink>
               </li>
               <li>
                 <NavLink to="/transactions"> Transactions</NavLink>
               </li>
               <li>
                 <NavLink to="/check_Transactions"> Check_Transactions </NavLink>
               </li>
             </ul>
           </nav>
         </div>
       </header>
    </>
   );
 };
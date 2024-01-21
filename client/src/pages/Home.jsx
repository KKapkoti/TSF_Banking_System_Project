
 export const Home = () => {

     return (
       <>
           <main>
            <section classsName="Section-hero">
           
               <div class ="container grid grid-two-cols">
                <div className="hero-content">
                  <p>We are providing best services</p>
                   <h1>Welcome to The SparksFoundation Bank</h1>
                   <p>
                      our bank offers Net Banking Services & Personal banking services 
                      like Accounts & Deposite, Cards, Loans, Insurance & more.....
                   </p>
                  
                </div>
              

               {/* hero images */}
                <div className="hero-image">
                   <img src="/image/Bank_img2.png" alt="Bank image" width="750"
                    height="600"/>
              
               
                </div>

                </div>
            </section>
           </main>

           <div className="btn btn-group">
              <a href="/costumers">
                <button className="btn">Costumers</button>
              </a><br/>
              <a href="/check_Transactions">
                <button className="btn">Check Transactions</button>
              </a>
            </div>
           

          
         </>
     );
  };
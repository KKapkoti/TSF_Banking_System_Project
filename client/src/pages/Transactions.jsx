import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { produrl } from "../../urlFile";
//import UsernameSuggestion from "./UsernameSuggestion";

export const Transactions = () => {
  const [user, setUser] = useState({
    SenderName: "",
    ReceiverName: "",
    Amount: 0,

  });


   const navigate = useNavigate();


  //handling the input values
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;


    setUser({
      ...user,
      [name]: value,
    });
  };

  // handle form on submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
   
  
  try {
    const response = await fetch(`${produrl}/api/transaction`, {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });
    console.log("response data : ", response);

    console.log(response.data);
    if (response.status ===200) {
      const responseData = await response.json();
      alert("Transaction successful!");
      setUser({ SenderName: "", ReceiverName: "", Amount: 0 });
      console.log(responseData);
      navigate("/Check_Transactions");
    } else {
      console.log("error inside response ", "error");
    }
  } catch (error) {
    console.error("Error", error);
    console.log(error.response);
  }
 };



  return (
    <>
      <section>
        <main>
          <div className="section-transactions">
           <div className="container grid grid-two-cols">
              <div className="transactions-image trans-img">
                <img
                  src="/image/transactionImg.png"
                  alt="transactions"
                  width="600"
                  height="700"
                />
              </div> 
            
                {/* our main transaction code   */}
              <div className="transactions-form">
                <h1 className="main-heading mb-3">Transactions</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="SenderName">sender</label>
                    <input
                      type="text"
                      name="SenderName"
                      value={user.SenderName}
                      onChange={handleInput}
                      placeholder="customer1"
                    />
                    
                  </div>
                  <div>
                    <label htmlFor="ReceiverName">receiver</label>
                    <input
                      type="text"
                      name="ReceiverName"
                      value={user.ReceiverName}
                      onChange={handleInput}
                      placeholder="customer2"
                    />
                  </div>
                  <div>
                    <label htmlFor="Amount">Amount</label>
                    <input
                      type="number"
                      name="Amount"
                      value={user.Amount}
                      onChange={handleInput}
                      placeholder="Enter amount"
                    />
                  </div>
                  <br /> 
                  <button type="submit" className="btn btn-submit" >
                     Transaction successful
                  </button>
                </form>
              </div>
              </div>
          </div>
        </main>
      </section>
    </>
  );
};












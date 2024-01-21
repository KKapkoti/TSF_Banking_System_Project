import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { produrl } from '../../urlFile';


/*styles start */
const StyledDiv = styled.div`
  margin: 20px;

`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
 
`;

const StyledTh = styled.th`
  padding: 12px;
  text-align: left;
  border: 1px solid #ddd;
  background-color: rgb(33, 95, 201);
`;

const StyledTd = styled.td`
  padding: 12px;
  text-align: left;
  border: 1px solid #ddd;
  background-color: white;
  color: black;
`;

/*styles end */



export const Check_Transactions = () => {
  console.log("im here");
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactionHistory = async () => { 
      try {
        const response = await fetch(`${produrl}/api/transaction-history`, {
          method: "GET",
        });
        console.log(response);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
       console.log(data);
        setTransactions(data || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching transaction history:', error);
        setLoading(false);
      }
    };

    fetchTransactionHistory();
  }, []);
  const formatDate = (dateTimeString) => {
    const date = new Date(dateTimeString);
    return date.toISOString().split('T')[0]; // Extracts YYYY-MM-DD
  };

  return (
    <StyledDiv>
      <h2>Transaction History</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <StyledTable>
          <thead>
            <tr>
            <StyledTh>Sender Name</StyledTh>
              <StyledTh>Receiver Name</StyledTh>
              <StyledTh>Amount</StyledTh>
              <StyledTh>Date</StyledTh>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(transactions) && transactions.length > 0 ? (
              transactions.map((transaction) => (
                <tr key={transaction._id}>
                  <StyledTd>{transaction.SenderName}</StyledTd>
                  <StyledTd>{transaction.ReceiverName}</StyledTd>
                  <StyledTd>${transaction.Amount}</StyledTd>
                  <StyledTd>{formatDate(transaction.date)}</StyledTd>
                </tr>
              ))
            ) : (
              <tr>
                 <StyledTd colSpan="3">No transactions found.</StyledTd>
              </tr>
            )}
          </tbody>
          </StyledTable>
      )}
    </StyledDiv>
  );
};
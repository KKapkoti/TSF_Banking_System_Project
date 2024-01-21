import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { produrl } from '../../urlFile';

/*styles start */
const StyledDiv = styled.div`
  margin: 20px;
`;

const StyledTable = styled.table`
  background-color: #fff;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 7px 29px 0px;
  width: 100%;
  border-collapse: collapse;
  border-radius: 1rem;
  margin-top: 20px;
  -webkit-border-radius: 1rem;
  -moz-border-radius: 1rem ;
  -ms-border-radius: 1rem;
  -o-border-radius: 1rem;
`;

const StyledTh = styled.th`
  padding: 12px;
  text-align: left;
  border: 1px solid #ddd;
  background-color: skyblue;
`;

const StyledTd = styled.td`
margin-bottom: 10px;
border-bottom: 4px solid transparent;
color: #242424;
  padding: 12px;
  text-align: left;
  border: 1px solid #ddd;
`;

/*styles end */






export const Customers = () => {
  console.log("im here");
  const [users, setusers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCustomers = async () => { 
      try {
        const response = await fetch(`${produrl}/api/users`, {
          method: "GET",
        });
        console.log(response);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
       console.log(data);
        setusers(data || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users name:', error);
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <StyledDiv>
      <h2>Customers Name</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <StyledTable>
          <thead>
            <tr>
              <StyledTh>Customer ID</StyledTh>
              <StyledTh>Customer</StyledTh>
              <StyledTh>Email</StyledTh>
              <StyledTh>Acount Number</StyledTh>
              <StyledTh>Balance</StyledTh>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(users) && users.length > 0 ? (
              users.map((user) => (
                <tr key={user._id}>
                  <StyledTd>{user.id}</StyledTd>
                  <StyledTd>{user.username}</StyledTd>
                   <StyledTd>{user.email}</StyledTd>
                  <StyledTd>{user.account_no}</StyledTd>
                  <StyledTd>${user.balance}</StyledTd>
                </tr>
              ))
            ) : (
              <tr>
                <StyledTd colSpan="3">Customers not found.</StyledTd>
              </tr>
            )}
          </tbody>
        </StyledTable>
      )}
    </StyledDiv>
  );
};



/* <table></table>
          <div className="transaction-grid">
          {Array.isArray(transactions) && transactions.length > 0 ? (
            transactions.map((transaction) => (
              <div key={transaction._id} className="transaction-item">
                <p><strong>:</strong> {transaction.id}</p>
                <p><strong>Sender Name:</strong> {transaction.username}</p>
                <p><strong>UserID:</strong> {transaction.id}</p>
                <p><strong>Receiver Name:</strong> {transaction.balance}</p>
                <p><strong>:</strong> ${transaction.email}</p>
                <p><strong>Account Number:</strong> ${transaction.account_no}</p>

                </div> */
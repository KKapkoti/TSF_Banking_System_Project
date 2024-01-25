// models/Transaction.js
    const mongoose = require('mongoose');


        const TransactionsSchema =  new mongoose.Schema({
            SenderName: {
                type: String, 
                required: true 
                },
                ReceiverName: { 
                    type: String, 
                    required: true 
                },

            Amount: {
               type: Number
            },
            date: { 
                type: Date,
                default: Date.now },
        },
    );

    const Transactions = mongoose.model("Transactions", TransactionsSchema); 
    module.exports = Transactions; 





    


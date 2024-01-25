const mongoose = require("mongoose");


    const userSchema = new mongoose.Schema({
        id:{
            type:String,
            require:true,
        },
        username:{
            type:String,
            require:true,
        },
        email: {
            type:String,
            require:true,
        },
        account_no: {
            type:String,
            require:true,
        },
        balance:{
            type: Number,
            default: 0,
        },
        password:{
            type:String,
            require:true,
        }
    },
    
    );


    //define the model or the collection name
    const User = new mongoose.model("User", userSchema);
    module.exports = User;

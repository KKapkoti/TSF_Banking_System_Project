// *------------------------
// *Controllers
//*-------------------------
const User = require("../models/user-model");
// //In an Express.js application, a "controller" refers to a part of your code that is responsible
// // for handling the application's logic. Controllers are typically used to process incoming requests,
// //interact with models (data sources), and end response back to clients. They help organize your
// //application by separating concerns and following the MVC (Medel-View-Controller) design pattern.

      
      exports.getAllUsers  = async (req, res) => {
        try {
           const userData = await User.find();
          //const userData = req.user;
          console.log(userData);
          return res.status(200).json(userData);
        } catch (error) {
          console.log(` error from user route ${error}`);
          res.status(500).json({error: error.message});
        }
      };


      exports.getUserByUserName  = async (req, res) => {
        try {
          console.log(req.params.UserName);
          const  username  = req.params.UserName ;
           const userData = await User.findOne({ name: username});
           if (!userData) {
            return res.status(404).json({ error: 'User not found' });
           }
          //const userData = req.user;
          console.log(userData);
          return res.status(200).json(userData);
        } catch (error) {
          console.log(` error from user route ${error}`);
          res.status(500).json({error: error.message});
        }
      };
    

      exports.createUser = async (req, res) => {
        const { id, username, balance, email, account_no,  password} = req.body;
      
        try {
          const existingUser = await User.findOne({ id });
      
          if (existingUser) {
            return res.status(400).json({ error: 'User with the same ID already exists' });
          }
      
          const newUser = new User({ id, username, balance, email, account_no, password });
          await newUser.save();
      
          res.json({ message: 'User created successfully', user: newUser });
        } catch (error) {
          console.error('Error creating user:', error);
          res.status(500).json({ error: 'Internal server error' });
        }
      };
      
      exports.deleteUser = async (req, res) => {
        const userId = req.params.id;
      
        try {
          const deletedUser = await User.findOneAndDelete({ id: userId });
      
          if (!deletedUser) {
            return res.status(404).json({ error: 'User not found' });
          }
      
          res.json({ message: 'User deleted successfully', user: deletedUser });
        } catch (error) {
          console.error('Error deleting user:', error);
          res.status(500).json({ error: 'Internal server error' });
        }
      };

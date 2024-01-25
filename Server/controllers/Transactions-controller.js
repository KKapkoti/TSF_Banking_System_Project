const Transaction = require("../models/Transactions-model");
const User = require("../models/user-model");

exports.makeTransaction = async (req, res) => {
  console.log("makeTransaction");
  const { SenderName, ReceiverName, Amount } = req.body;
  console.log(SenderName);
  console.log(ReceiverName);
  try{
    const sender = await User.findOne({ username: SenderName });
    console.log(sender);
    const receiver = await User.findOne({ username: ReceiverName });
    console.log(receiver);

    if (!sender || !receiver) return res.status(404).json({ error: 'User not found' });

    if (sender.balance < Amount) {
      return res.status(400).json({ error: 'Insufficient balance' });
    }

    const session = await User.startSession();
    session.startTransaction();
  

  try {
    console.log('start transaction');
    await User.updateOne({ id: sender.id },{SenderName: sender.username}, {$inc: { balance: -Amount }});
    console.log('start transactionStarting');
    await User.updateOne({ id: receiver.id },{ReciverName: receiver.username}, { $inc: { balance: Amount } });
    console.log('start transactionStarting');
    // await Transaction.create({
    //   SenderName: sender.username,
    //   ReciverName: receiver.username,
    //   Amount: Amount,
    //   timestamp: new Date(),
    // }).save();

    const transaction = new Transaction({
      SenderName: sender.username,
      ReceiverName: receiver.username,
      Amount: Amount,
      timestamp: new Date()
    });

    await transaction.save();

   await session.endSession();
    res.json({ message: 'Transaction successful' });
  } 
  catch (transactionError) {
    // Abort the transaction in case of an error
    await session.abortTransaction();
    session.endSession();

    console.error('Error processing transaction:', transactionError);
    res.status(500).json({ error: 'Internal server error' });
  }
}
 catch (error) {
  console.error('Error finding users:', error);
  res.status(500).json({ error: 'Internal server error' });
}
};



exports.getTransactionHistory = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (error) {
    console.error('Error fetching transaction history:', error);
    res.status(500).json({ error: 'Internal server error' });
  }

};

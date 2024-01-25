const express = require("express");
const router = express.Router();

const transactionController = require("../controllers/Transactions-controller");

/**
 * @swagger
 * /api/transaction:
 *   get:
 *     summary: Get all users
 *     tags: [Transaction]
 *     responses:
 *       200:
 *         description: Successful response with user list
 *       500:
 *         description: Internal server error
 */
router.post('/transaction',transactionController.makeTransaction);



router.get('/transaction-history', transactionController.getTransactionHistory);

module.exports = router;



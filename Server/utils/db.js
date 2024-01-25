const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User operations
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Successful response with user list
 *       500:
 *         description: Internal server error
 */
router.get('/users', userController.getAllUsers);


/**
 * @swagger
 * /api/UserName:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Successful response with user list
 *       500:
 *         description: Internal server error
 */
router.get('/users/:UserName', userController.getUserByUserName);


/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: number
 *               name:
 *                 type: string
 *               balance:
 *                 type: number
 *     responses:
 *       200:
 *         description: Successful response with created user
 *       400:
 *         description: Bad request, user with the same ID already exists
 *       500:
 *         description: Internal server error
 */
router.post('/users', userController.createUser);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to delete
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Successful response with deleted user
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
router.delete('/users/:id', userController.deleteUser);

module.exports = router;

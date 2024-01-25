# MERN Basic Banking System

A simple banking system application built using the MERN (MongoDB, Express.js, React, Node.js) stack. The project includes dummy data of customers and facilitates transactions between multiple users.

## Overview

This project aims to demonstrate a basic banking system where users can view customer details, transfer funds, and view transaction history. It's a practical example of how the MERN stack can be used to create a full-stack web application.

## Features

- View list of customers with their details
- Transfer funds between multiple customers
- View transaction history

## Getting Started

Install dependencies:

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install

# Configure environment variables:
Create a .env file in the server directory and provide your MongoDB connection string. Example:
MONGODB_URI=mongodb://localhost:27017/banking-system

Project Structure
The project structure is organized as follows:

client/: React.js frontend.
server/: Node.js and Express.js backend.
server/models: MongoDB models (e.g., Customer, Transaction).
server/routes: Express.js routes for handling API requests.
server/controllers: Controllers for handling business logic.
server/config: Configuration files, including database connection setup.

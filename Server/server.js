require("dotenv").config();
const express = require("express");
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const app = express();
const cors = require("cors");
const userRoutes = require("./router/userRoutes");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const TransactionsRoute = require("./router/Transactions-router");
const swaggerDocument = require('./swagger.json');


// const swaggerOptions = {
//   swaggerDefinition: require('./swagger.json'),
//   apis: ['./router/*.js'],
// };
// const swaggerSpec = swaggerJsdoc(swaggerOptions);
// app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(cors({ credentials: true }));
app.use(express.json());

app.use(errorMiddleware);


// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use("/api", userRoutes);
app.use("/api", TransactionsRoute);


// Swagger setup
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Your API',
      version: '1.0.0',
      description: 'Your API description',
    },
  },
  // Path to the API routes
  apis: ['path/to/your/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api-docs', (req, res, next) => {
  try {
    swaggerUi.setup(swaggerSpec)(req, res, next);
  } catch (err) {
    console.error('Error serving Swagger documentation:', err);
    next(err);
  }
});


const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};



const PORT = 5000;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
  });
});

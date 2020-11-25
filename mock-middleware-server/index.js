import express from "express";
import * as bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import dotenv from "dotenv";

import mockserver from '@funq/mock-server';

dotenv.config();

const mockMiddleware = mockserver.middleware(process.env.CONFIG_PATH, process.env.DATA_PATH);

const app = express();
app.use(bodyParser.json());
app.use(fileUpload());

//pre mock middleware
app.get('/', function (req, res) {
  res.send('Welcome mock server middleware!')
});

//mock middleware 
app.use(mockMiddleware);

//post mock middleware
app.get('/*',function (req, res) {
  res.send('Unknown Path: ' + req.originalUrl);
});

app.listen(3000, () => {
  // tslint:disable-next-line
  console.log("Express server listening on port ", 3000);
});

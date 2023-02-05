import express,{Application, Request, Response} from 'express';
import chalk from 'chalk';
import data from '../data.json';
import { mongoConnect } from './mongodb';

import * as dotenv from 'dotenv';
dotenv.config();
console.log(process.env);

let cors = require('cors');
const app : Application = express();


app.use(cors());
app.get('/', (request : Request, response: Response) => response.json({text:'hello'}))
    .get('/login', (request : Request, response: Response) => response.send({text:'login page'}))
    .get('/products', (request : Request, response: Response) => response.json(data));


mongoConnect().then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(chalk.blue(`the serverss is running on http://localhost:${process.env.PORT}`));
    });

});
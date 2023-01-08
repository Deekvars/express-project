import express,{Application, Request, Response} from 'express';
import chalk from 'chalk';
import data from './data.json';

let cors = require('cors');
const app : Application = express();


app.use(cors());
app.get('/', (request : Request, response: Response) => response.json({text:'hello'}))
    .get('/login', (request : Request, response: Response) => response.send({text:'login page'}))
    .get('/products', (request : Request, response: Response) => response.json(data));

app.listen('3030', ()=>{
    console.log(chalk.blue('the serverss is running on http://localhost:3000'))
});
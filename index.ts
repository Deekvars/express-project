import express,{Application, Request, Response} from 'express';
const app : Application = express();

app.get('/', (request : Request, response: Response) => response.json({text:'hello'}));
app.listen('3000');
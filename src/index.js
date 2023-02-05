"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const chalk_1 = __importDefault(require("chalk"));
const app = (0, express_1.default)();
app.get('/', (request, response) => response.json({ text: 'hello' }))
    .get('/login', (request, response) => response.json({ text: 'login page' }));
app.listen('3000', () => {
    console.log(chalk_1.default.green('the server is runnign on http://localhost:3000'));
});

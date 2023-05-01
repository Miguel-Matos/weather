import './input.css';
import { api } from './api';

const test = document.createElement('p');
test.textContent = "test";

api.getInfo();

document.body.appendChild(test);
import { Ant } from './module1.js';
import { langtonant } from './module1.js';

var hormiga = new Ant();
var tamano = parseInt(process.argv[2]);
var pasos = parseInt(process.argv[3]);
langtonant(hormiga, tamano, pasos);
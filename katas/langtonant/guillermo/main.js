import { ant } from './module1.js';
import { mover } from './module1.js';

var hormiga = new ant();
var tamano = parseInt(process.argv[2]);
var pasos = parseInt(process.argv[3]);
mover(hormiga,tamano,pasos);
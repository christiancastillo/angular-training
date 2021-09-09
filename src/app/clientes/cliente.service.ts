import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';

@Injectable() //con este apartado se puede indicar en qué modulos se puede consumir el servicio
export class ClienteService {

  constructor() { }
  getCliente():Cliente[]{
    return CLIENTES;
  }
}

import { Injectable } from '@angular/core';

//Indica  donde quiere que  se provea este servicio, en este caso en el root
@Injectable({
  providedIn: 'root'
})
export class MessageService  {

public message: string[] = [];

  constructor() { }

  public getMessage(): string[]{
    return this.message || "";
  }
  public setMessage(message:string){
    this.message.push(message);
  }
}

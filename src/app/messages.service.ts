import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  messages:string[] = [];

  addMesage(messages:string){

    this.messages.push(messages);
  }

  clearMessage(){
    this.messages = [];
  }
}

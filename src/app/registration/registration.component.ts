import { Component } from '@angular/core';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
})
export class RegistrationComponent {
  names: string = "";
  dates: string = "";
  items = [];
  constructor() { }

  generateList() {

  }

  getItemsList() {
    //getter for items[]
  }
}

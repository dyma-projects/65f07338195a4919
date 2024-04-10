import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.css']
})
export class Exercice3Component {

  public status: boolean = true;

  switchStatus() {
    this.status = !this.status;
    console.log("status value:", this.status);    
  }
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  @Input() bindedproperty: string;

  public interpolation: string;

  constructor () {
    this.bindedproperty = "property-binding";
    this.interpolation = "je suis une interpolation de variable";
  }

  ngOnInit(): void {
  }

  catchClick(){
    console.log("Je suis une liaison d'évènements");
  }

}

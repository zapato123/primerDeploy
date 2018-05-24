import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number = 4;
  textitoTitulo: string = "Agrega más cosas amiguito";
  btnText: string = 'Add an Item'; 
  goalText: string = 'My first life goal';
  jorgito = [];

  constructor() { }

  ngOnInit() {
    this.itemCount = this.jorgito.length;
    
  }

  addItem() {
    this.jorgito.push("un textito");
    this.goalText = '';
    this.itemCount = this.jorgito.length;
  }
}

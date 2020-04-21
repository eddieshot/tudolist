import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {


  nomeTarefa:string;

  constructor() { }

  ngOnInit(): void {
  }


  arrayLista:Array<any> =[
    "Lista item 1",
    "lista item 2"
  ]

  guardaTarefa(event){
    this.nomeTarefa = event.target.value
  }

  adicionarItem(){
    this.arrayLista.unshift(this.nomeTarefa)
  }

}

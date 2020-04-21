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

  //array de teste padrão, passando os dados daqui pro display
  listadeTarefas:Array<any> =[
    "Lista item 1",
    "lista item 2"
  ]

  guardaTarefa(event){
    this.nomeTarefa = event.target.value
  }

  //adiciona o item como o primeiro do array
  adicionarItem(){
    this.listadeTarefas.unshift(this.nomeTarefa)
  }

}

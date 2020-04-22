import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  title = 'Ajustar Tarefas';

  // decorator que espera os dados do array
  @Input() tarefas:Array<any>

  constructor() { }

  ngOnInit(): void {
  }

removerItem(item){
let index:number = this.tarefas.indexOf(item);
this.tarefas.splice(index,1);
}
}

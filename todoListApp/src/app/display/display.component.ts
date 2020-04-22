import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  title = 'Ajustar Tarefas';
  show: boolean = true;

  // decorator que espera os dados do array
  @Input() todos: Array<any>

  constructor() { }

  ngOnInit(): void {
  }

  removerItem(item) {
    let index: number = this.todos.indexOf(item);
    this.todos.splice(index, 1);
    if (this.todos.length == 0) {
      this.show = false;
    }
  }

  markAsDone(){
   
  }

  markAsUndone(){
    
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora Modular';

  parentResult:number;

  add_result_parent(result:number){
    this.parentResult=result;
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent  {
 operandoA: number;
 operandoB: number;
 
 @Output() resultSum = new EventEmitter<number>();

 sum():void{

  let result = this.operandoA + this.operandoB;
  this.resultSum.emit(result);
 }

}

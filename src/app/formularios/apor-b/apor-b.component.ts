import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Calcular } from './AxB';

@Component({
  selector: 'app-apor-b',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './apor-b.component.html',
  styleUrl: './apor-b.component.css'
})
export class AporBComponent {
  form!:FormGroup;
  resultado!:number;
  operacionDisplay:string='';
  objA: Calcular = new Calcular();

  ngOnInit():void{
    this.form = new FormGroup({
      numeroA: new FormControl(''),
      numeroB: new FormControl('')
    });
  }

  multi():void{
    this.objA.numA = this.form.value.numeroA;
    this.objA.numB = this.form.value.numeroB;
    this.objA.sumar();
    this.resultado=this.objA.resultado;
    this.operacionDisplay=this.objA.operacion;
  }
}

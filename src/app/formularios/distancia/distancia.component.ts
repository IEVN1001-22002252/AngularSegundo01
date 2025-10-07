import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Calcular } from './calculardistancia';

@Component({
  selector: 'app-distancia',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './distancia.component.html',
  styleUrl: './distancia.component.css'
})
export class DistanciaComponent {
  formulario2!:FormGroup;
  res!:number;
  objDis: Calcular = new Calcular();

  constructor(){}


  ngOnInit():void{
    this.formulario2 = new FormGroup({
      dis1: new FormControl(''),
      dis2: new FormControl(''),
      dis3: new FormControl(''),
      dis4: new FormControl('')
    });
  }
  cal():void{

    this.objDis.di1= this.formulario2.value.dis1;
    this.objDis.di2= this.formulario2.value.dis2;
    this.objDis.di3= this.formulario2.value.dis3;
    this.objDis.di4= this.formulario2.value.dis4;
    this.objDis.calcular();
    this.res=this.objDis.res;
  }
}

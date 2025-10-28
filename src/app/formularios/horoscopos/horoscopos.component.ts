import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Horoscopo } from './horoscopo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-horoscopos',
  templateUrl: './horoscopos.component.html',
  imports: [CommonModule,ReactiveFormsModule],
  styleUrls: ['./horoscopos.component.css']
})
export class HoroscoposComponent implements OnInit {

  formulario3!: FormGroup;
  objHo: Horoscopo = new Horoscopo();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formulario3 = this.fb.group({
      nom: [''],
      aPaterno: [''],
      aMaterno: [''],
      dia: [''],
      mes: [''],
      año: [''],
      sexo: ['']
    });
  }

  horo(): void {
    const datos = this.formulario3.value;
    this.objHo.nom = datos.nom;
    this.objHo.aPaterno = datos.aPaterno;
    this.objHo.aMterno = datos.aMaterno;
    this.objHo.sexo = datos.sexo;

    // Llama a los métodos de la clase Horoscopo
    this.objHo.edad = this.objHo.calcularEdad(datos.año, datos.mes, datos.dia);
    this.objHo.signoChino = this.objHo.obtenerSignoChino(datos.año);
  }
}

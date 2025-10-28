import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from "./navbar/navbar.component";
import { DistanciaComponent } from "./formularios/distancia/distancia.component";
import { HoroscoposComponent } from "./formularios/horoscopos/horoscopos.component";
import { TempComponent } from "./tem/temp/temp.component";
import { TemhComponent } from './tem/temh/temh.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, DistanciaComponent, HoroscoposComponent, TempComponent, TemhComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularSegundo01';

  ngOnInit(): void {
    initFlowbite();
  }
}


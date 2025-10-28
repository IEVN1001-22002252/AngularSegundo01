import { Routes } from '@angular/router';
import { SingInComponent } from './auth/features/sing-in/sing-in.component';

export const routes: Routes = [
  {
  path:'auth',
  children: [
    {
      path:'sing-in',
      loadComponent:()=> import('./auth/features/sing-in/sing-in.component').then((c)=> c.SingInComponent)
    },
    {
      path:'sing-up',
      loadComponent:()=> import('./auth/features/sing-up/sing-up.component').then((c)=> c.SingUpComponent),
    },
  ],
},
{
  path:'utl',
  children:[
    {
      path:'listaalumnos',
      loadComponent:()=> import('./utl/alumnos/alumnos.component').then((c)=> c.AlumnosComponent),
    },
    {
      path:'agregar',
      loadComponent:()=> import('./utl/agregar/agregar.component').then((c)=> c.AgregarComponent),
    },
    {
      path:'eliminar/:matricula',
      loadComponent:()=> import('./utl/eliminar/eliminar.component').then((c)=> c.EliminarComponent),
    },
    {
      path:'editar/:matricula',
      loadComponent:()=> import('./utl/editar/editar.component').then((c)=> c.EditarComponent),
    },
  ],
},
{
  path:'formularios',
  children:[
    {
      path:'apor-b',
      loadComponent:()=> import('./formularios/apor-b/apor-b.component').then((c)=> c.AporBComponent),
    },
    {
      path:'distancia',
      loadComponent:()=> import('./formularios/distancia/distancia.component').then((c)=> c.DistanciaComponent),
    },
    {
      path:'horoscopos',
      loadComponent:()=> import('./formularios/horoscopos/horoscopos.component').then((c)=> c.HoroscoposComponent),
    },
    {
      path:'multiplicacion',
      loadComponent:()=> import('./formularios/multiplicacion/multiplicacion.component').then((c)=> c.MultiplicacionComponent),
    },
  ],
},
{path:'',redirectTo:'admin', pathMatch:'full'},
{path:'**', redirectTo:'admin'},
];

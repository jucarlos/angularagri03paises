import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisesRoutingModule } from './paises-routing.module';
import { ListadoComponent } from './listado/listado.component';
import { DetalleComponent } from './detalle/detalle.component';


@NgModule({
  declarations: [
    ListadoComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    PaisesRoutingModule
  ]
})
export class PaisesModule { }

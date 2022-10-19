import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, delay  } from 'rxjs';

import { Country } from '../interfaces/country.interface';
import { PaisesService } from '../services/paises.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  pais: Country | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisesService: PaisesService
  ) { }

  ngOnInit(): void {

    // this.activatedRoute.params.subscribe( ( resp: any  ) => {

    //   const id = resp.id;
    //   this.paisesService.getPaisPorCodigo( id ).subscribe( pais => {

    //     console.log( pais );
    //     console.log( pais.flags.svg);
    //     this.pais = pais ;
    //   });

    // });

    // this.activatedRoute.params
    // .pipe(
    //   switchMap( ( { id }) => this.paisesService.getPaisPorCodigo( id )),
    // )
    // .subscribe( pais => this.pais = pais );

    this.activatedRoute.params.pipe(
      delay( 1000 )
    )   
    .subscribe( (resp: any) => {

      console.log( resp);

      this.paisesService.getPaisPorCodigo( resp.id ).subscribe ( pais => {
        console.log( pais );
        this.pais = pais;
      })
   })


  }

}

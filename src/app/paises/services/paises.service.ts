import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/environments/environment';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http: HttpClient) { }


  getPaises(): Observable<Country[]> {

    const url = `${BASE_URL}/all`;
    return this.http.get<Country[]>( url );

  }

  getPaisPorCodigo( id: string ): Observable<Country> {

    const url = `${BASE_URL}/alpha/${id}`;
    return this.http.get<Country>( url );

  }


}

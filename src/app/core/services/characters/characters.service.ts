import { environment } from './../../../../environments/environment';
import { ICharacters } from './../../../pages/list/characters.models';
import { ApiCharacters } from './../../../pages/list/characters.models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
environment
@Injectable({
  providedIn: 'root',
})
export class CharactersService {

  constructor(private httpClient: HttpClient) {}
/*
*Introducir la ruta de nuestra api donde pone "ruta", y mediante el observable establecemos lo que va a devolver
observable = algo que podemos escuchar.

*/

  public getCharacters():any{
    return this.httpClient.get(`${environment.apiUrl}`);
  }

  public getCharacterById(characterId: string): Observable<ICharacters> {
    return this.httpClient.get<ICharacters>(`${environment.apiUrl}/${characterId}`);
  }

  public addProduct(body: ICharacters): Observable<ICharacters> {
    return this.httpClient.post<ICharacters>(
      `${environment.apiUrl}characters/create`,
      body
    );
  }

  // public editProduct(idProduct: string, body: IProduct): Observable<IProduct> {
  //   return this.httpClient.put<IProduct>(
  //     `${environment.apiUrl}products/${idProduct}`,
  //     body
  //   );
  // }

  public deleteCharacter(idCharacter: string): Observable<ICharacters> {
    return this.httpClient.delete<ICharacters>( `${environment.apiUrl}character/${idCharacter}`);
  }
}

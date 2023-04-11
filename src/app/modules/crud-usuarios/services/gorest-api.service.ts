import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { usuario } from '../models/usuario-model';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class GorestApiService {

  baseUrl: string = "https://gorest.co.in/public/v2/users";

  constructor(private cliente:HttpClient) { }

  ObtenerUsuarios():Observable<usuario[]>{
    return this.cliente.get<usuario[]>(this.baseUrl)    
      .pipe(
        catchError(this.handleError<usuario[]>('ObtenerUsuarios', [])
        )
      );
  }    
  
  ObtenerUsuario(id:number):Observable<usuario>{
    return this.cliente.get<usuario>(this.baseUrl + "/" + id)
    .pipe(
      catchError(this.handleError<usuario>('ObtenerUsuario')
      )
    );    
  }  

  ActualizarUsuario(usuario:usuario):Observable<usuario>{
    return this.cliente.put<usuario>(this.baseUrl + "/" + usuario.id, usuario)
    .pipe(
      catchError(this.handleError<usuario>('ActualizarUsuario')
      )
    );
  }  

  AgregarUsuario(usuario:usuario):Observable<usuario>{
    return this.cliente.post<usuario>(this.baseUrl, usuario)
    .pipe(
      catchError(this.handleError<usuario>('ActualizarUsuario')
      )
    );    
  } 
  
  EliminarUsuario(id:number):Observable<usuario>{
    return this.cliente.delete<usuario>(this.baseUrl + "/" +id)
    .pipe(
      catchError(this.handleError<usuario>('ActualizarUsuario')
      )
    );
  }    

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      return of(result as T);
    };
  }  

}

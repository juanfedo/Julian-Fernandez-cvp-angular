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
    return this.cliente.get<usuario[]>(this.baseUrl);
  }    
  
  ObtenerUsuario(id:number):Observable<usuario>{
    return this.cliente.get<usuario>(this.baseUrl + "/" + id);    
  }  

  ActualizarUsuario(usuario:usuario):Observable<usuario>{
    return this.cliente.put<usuario>(this.baseUrl + "/" + usuario.id, usuario);
  }  

  AgregarUsuario(usuario:usuario):Observable<usuario>{
    return this.cliente.post<usuario>(this.baseUrl, usuario);
  } 
  
  EliminarUsuario(id:number):Observable<usuario>{
    return this.cliente.delete<usuario>(this.baseUrl + "/" +id);
  }    

}

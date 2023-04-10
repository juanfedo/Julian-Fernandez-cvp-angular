import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { usuario } from '../models/usuario-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GorestApiService {

  baseUrl: string = "https://gorest.co.in/public/v2/users";

  constructor(private cliente:HttpClient) { }

  ObtenerUsuarios():Observable<usuario[]>{
    return this.cliente.get<usuario[]>(this.baseUrl);
  }    
  
}

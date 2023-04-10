import { Component, OnInit } from '@angular/core';
import { GorestApiService } from '../../services/gorest-api.service'
import { usuario } from '../../models/usuario-model';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  constructor(private servicioGoRest: GorestApiService ) { }

  usuarios: usuario[] = [];

  ngOnInit(): void {
    this.servicioGoRest.ObtenerUsuarios().subscribe(
      data => this.usuarios = data
    );
  }

}

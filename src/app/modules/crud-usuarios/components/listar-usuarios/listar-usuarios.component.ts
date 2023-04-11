import { Component, OnInit, Inject } from '@angular/core';
import { GorestApiService } from '../../services/gorest-api.service'
import { usuario } from '../../models/usuario-model';
import { MatDialog } from '@angular/material/dialog';
import { NuevoUsuarioComponent } from '../modals/nuevo-usuario/nuevo-usuario.component';
import { MostrarUsuarioComponent } from '../modals/mostrar-usuario/mostrar-usuario.component';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  constructor(private servicioGoRest: GorestApiService, private modalDialog: MatDialog) 
  { }

  usuarios: usuario[] = [];
  dialogRef: any;

  ngOnInit(): void {
    console.debug();
    this.servicioGoRest.ObtenerUsuarios().subscribe(
      data => this.usuarios = data
    );
  }

  AgregarUsuario(){
    console.debug();
    this.dialogRef = this.modalDialog.open(NuevoUsuarioComponent, {
      width: "900px"
    });
    this.dialogRef.afterClosed().subscribe(
      res => {
        console.log(res);
      }
    );
  }

  ObtenerInformacionUsuario(usuario:usuario){
    this.dialogRef = this.modalDialog.open(MostrarUsuarioComponent, {
      width: "auto",
      data: usuario
    });
  }

  ActualizarUsuario(id:number){
    console.log(id);
  }

  EliminarUsuario(id:number){
    console.log(id);
  }

}

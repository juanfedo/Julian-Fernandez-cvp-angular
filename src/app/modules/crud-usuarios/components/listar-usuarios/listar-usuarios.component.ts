import { Component, OnInit, Inject } from '@angular/core';
import { GorestApiService } from '../../services/gorest-api.service'
import { usuario } from '../../models/usuario-model';
import { MatDialog } from '@angular/material/dialog';
import { NuevoUsuarioComponent } from '../modals/nuevo-usuario/nuevo-usuario.component';
import { MostrarUsuarioComponent } from '../modals/mostrar-usuario/mostrar-usuario.component';
import { EditarUsuarioComponent } from '../modals/editar-usuario/editar-usuario.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  idUsuarioForm = new FormControl('');

  constructor(private servicioGoRest: GorestApiService, private modalDialog: MatDialog) 
  { }

  usuarios: usuario[] = [];
  dialogRef: any;

  ngOnInit(): void {    
    this.ObtenerUsuarios();
  }

  ObtenerUsuarios(){
    this.servicioGoRest.ObtenerUsuarios().subscribe(
      data => this.usuarios = data
    );
  }

  AgregarUsuario(){
    console.debug();
    this.dialogRef = this.modalDialog.open(NuevoUsuarioComponent, {
      width: "auto"
    });
    this.dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.ObtenerUsuarios();
      }
    });
  }

  ObtenerInformacionUsuario(usuario:usuario){
    this.dialogRef = this.modalDialog.open(MostrarUsuarioComponent, {
      width: "auto",
      data: usuario
    });
  }

  ActualizarUsuario(usuario:usuario){
    this.dialogRef = this.modalDialog.open(EditarUsuarioComponent, {
      width: "auto",
      data: usuario
    });

    this.dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.ObtenerUsuarios();
      }
    });
  }

  EliminarUsuario(id:number){
    if (confirm('¿Esta seguro que deseas borrar este usuario?')) {
      this.servicioGoRest.EliminarUsuario(id).subscribe(
        data => {
          alert('Usuario ' + id + ' eliminado con exito');
          this.ObtenerUsuarios();
        }
      );
    } 
  }

  BuscarUsuario(idUsuario: number) {
    if (idUsuario){
      this.dialogRef = this.modalDialog.open(MostrarUsuarioComponent, {
        width: "auto",
        data: idUsuario
      });    
    }
    else{
      alert('Debe ingresar un id');
    }
  }
}

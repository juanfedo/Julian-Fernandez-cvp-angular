import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoUsuarioComponent } from './components/nuevo-usuario/nuevo-usuario.component';
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { GorestApiService } from './services/gorest-api.service';


@NgModule({
  declarations: [NuevoUsuarioComponent, ListarUsuariosComponent],
  imports: [
    CommonModule, 
    HttpClientModule
  ],
  providers: [
    GorestApiService
  ],
  exports: [
    ListarUsuariosComponent,
  ]
})
export class CrudUsuariosModule { }

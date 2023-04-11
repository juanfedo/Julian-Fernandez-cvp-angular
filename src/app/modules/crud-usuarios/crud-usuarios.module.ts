import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoUsuarioComponent } from './components/modals/nuevo-usuario/nuevo-usuario.component';
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { GorestApiService } from './services/gorest-api.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditarUsuarioComponent } from './components/modals/editar-usuario/editar-usuario.component';
import { MostrarUsuarioComponent } from './components/modals/mostrar-usuario/mostrar-usuario.component';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NuevoUsuarioComponent, 
    ListarUsuariosComponent, 
    EditarUsuarioComponent, 
    MostrarUsuarioComponent
  ],
  imports: [
    CommonModule, 
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    GorestApiService
  ],
  entryComponents: [
    NuevoUsuarioComponent,
    EditarUsuarioComponent,
    MostrarUsuarioComponent
  ],
  exports: [
    ListarUsuariosComponent,
  ]
})
export class CrudUsuariosModule { }

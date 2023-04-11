import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { usuario } from '../../../models/usuario-model';
import { GorestApiService } from '../../../services/gorest-api.service';

@Component({
  selector: 'app-mostrar-usuario',
  templateUrl: './mostrar-usuario.component.html',
  styleUrls: ['./mostrar-usuario.component.css']
})
export class MostrarUsuarioComponent implements OnInit {

  id: number;
  name: string;
  email?: string;
  gender?: string;
  status?: string;

  constructor(private dialogRef: MatDialogRef<MostrarUsuarioComponent>, @Inject(MAT_DIALOG_DATA) private usuarioId: number, private servicioGoRest: GorestApiService) { 
  }
  
  ngOnInit(): void {
    this.servicioGoRest.ObtenerUsuario(this.usuarioId).subscribe(
      data => {
        this.id = data.id;
        this.name = data.name;
        this.email = data.email;
        this.gender = data.gender;
        this.status = data.status;
      }, 
      err => {
        this.id = -1;
      }
    );    
  }

  Close() {
    this.dialogRef.close();
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { usuario } from '../../../models/usuario-model';
import { GorestApiService } from '../../../services/gorest-api.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  Form: FormGroup;

  constructor(private servicioGoRest: GorestApiService, private fb: FormBuilder, private modalDialog: MatDialogRef<EditarUsuarioComponent>, 
    @Inject(MAT_DIALOG_DATA) private usuario: usuario) {
      this.Form = this.fb.group({
        id: [{ value: usuario.id, disabled: true }],
        name: [usuario.name],
        email: [{ value: usuario.email, disabled: false }],
        gender: [usuario.gender],
        status: [usuario.status]
      })
     }

  ngOnInit(): void {
  }

  onCrear() {
    this.usuario = {
      name: this.Form.get('name').value != this.usuario.name ? this.Form.get('name').value : null,
      email: this.Form.get('email').value != this.usuario.email ? this.Form.get('email').value : null,
      gender: this.Form.get('gender').value != this.usuario.gender ? this.Form.get('gender').value : null,
      status: this.Form.get('status').value != this.usuario.status ? this.Form.get('status').value : null,      
      id: this.usuario.id,
    };

    this.servicioGoRest.ActualizarUsuario(this.usuario).subscribe(data => {
      if (data != null){
        this.modalDialog.close(true);
      }
    });
  }
}

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
  usuarioModal: usuario;

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

  EditarUsuario() {
    this.usuarioModal = {
      name: this.Form.get('name').value,
      email: this.Form.get('email').value,
      gender: this.Form.get('gender').value,
      status: this.Form.get('status').value, 
      id: this.usuario.id,
    };

    this.servicioGoRest.ActualizarUsuario(this.usuarioModal).subscribe(data => {
      if (data != null){
        alert("Usuario actualizado con exito");
        this.modalDialog.close(true);
      }
    }, 
    err => {
      let mensaje = '\n';
      err.error.forEach(element => {
        mensaje += element.field + ' ' + element.message + '\n';
      });
      alert("Error: " + mensaje)
    });
  }

  Close(){
    this.modalDialog.close();
  }
}

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { usuario } from '../../../models/usuario-model';
import { GorestApiService } from '../../../services/gorest-api.service';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {

  Form: FormGroup;
  usuarioModal: usuario;

  constructor(private servicioGoRest: GorestApiService, private fb: FormBuilder, private modalDialog: MatDialogRef<NuevoUsuarioComponent>, 
    @Inject(MAT_DIALOG_DATA) private usuario: usuario) {
      this.Form = this.fb.group({
        name: [''],
        email: [''],
        gender: [''],
        status: ['']
      })
     }

  ngOnInit(): void {
  }

  CrearNuevoUsuario() {
    this.usuarioModal = {
      name: this.Form.get('name').value,
      email: this.Form.get('email').value,
      gender: this.Form.get('gender').value,
      status: this.Form.get('status').value,
      id: null 
    };

    this.servicioGoRest.AgregarUsuario(this.usuarioModal).subscribe(data => {
      if (data != null){
        alert("Usuario creado exitosamente con el ID: " + data.id);
        this.modalDialog.close(true);
      }
    }, err => {
      let mensaje = '\n';
      err.error.forEach(element => {
        mensaje += element.field + ' ' + element.message + '\n';
      });
      alert("Error1: " + mensaje)
    }
    );
  }

  Close(){
    this.modalDialog.close();
  }

}

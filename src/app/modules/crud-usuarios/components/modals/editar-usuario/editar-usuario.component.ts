import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  constructor(public modalDialog: MatDialogRef<EditarUsuarioComponent>, 
    @Inject(MAT_DIALOG_DATA) public message: string) { }

  ngOnInit(): void {
  }

}

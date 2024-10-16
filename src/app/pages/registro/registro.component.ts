import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ApiService } from '../../service/api.service';
import { IReqRegistro } from '../../models/IReqRegistro.interface';
import { IEvento } from '../../models/IEvento.interface';
import { IParticipante } from '../../models/IParticipante.interface';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule, HttpClientModule],
  providers: [ApiService],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent  implements OnInit {

  frmRegistro:FormGroup;
  eventos: IEvento[] = [];
  participantes: IParticipante[] = [];

  constructor(private api:ApiService) {
    this.frmRegistro = new FormGroup({
      evento: new FormControl('', Validators.required),
      documento: new FormControl('', Validators.required),
      partipante: new FormControl('', Validators.required)
    })
   }

  ngOnInit() {}

  registro(form:IReqRegistro){
    console.log(form);
    this.api.registrar(form).subscribe(datos =>{
      console.log(datos)
    })
  }

  mostrarEventos(){
    this.api.obtenerEventos().subscribe(
      (data: IEvento) => {
        console.log("Eventos: ", data);
      }
    )
  }

  mostrarParticipantes(){
    this.api.obtenerParticipantes().subscribe(
      (datos: IParticipante) => {
        console.log("Participantes: ", datos);
      }
    )
  }

}

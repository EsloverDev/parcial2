import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IReqRegistro } from '../models/IReqRegistro.interface';
import { Observable } from 'rxjs';
import { IResRegistro } from '../models/IResRegistro.interface';
import { IEvento } from '../models/IEvento.interface';
import { IParticipante } from '../models/IParticipante.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  urlEndPoint: string ='http://localhost:3000';
  constructor(private http: HttpClient) { }
  
  registrar(datos:IReqRegistro):Observable<IResRegistro>{
    let url = `${this.urlEndPoint}/eventos/crear`;
    return this.http.post<IResRegistro>(url,datos)
  }

  obtenerEventos():Observable<IEvento>{
    let url = `${this.urlEndPoint}/eventos`;
    return this.http.get<IEvento>(url);
  }

  obtenerParticipantes():Observable<IParticipante>{
    let url = `${this.urlEndPoint}/participantes`;
    return this.http.get<IParticipante>(url)
  }

}

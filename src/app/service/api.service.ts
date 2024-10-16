import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IReqRegistro } from '../models/IReqRegistro.interface';
import { Observable } from 'rxjs';
import { IResRegistro } from '../models/IResRegistro.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  urlEndPoint: string ='http://localhost:3000';
  constructor(private http: HttpClient) { }
  
  registrar(datos:IReqRegistro):Observable<IResRegistro>{
    let url = `${this.urlEndPoint}/user/registro`;
    return this.http.post<IResRegistro>(url,datos)
  }
}

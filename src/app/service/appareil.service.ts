import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppareilModule } from '../Models/appareil/appareil.module';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  constructor(private _http:HttpClient) { }

   GetAll():Observable<AppareilModule[]>{
    return this._http.get<AppareilModule[]>('http://localhost:8080/smart_home/appareil');
  }

   GetById(id:Number):Observable<AppareilModule>{
    return this._http.get<AppareilModule>(`http://localhost:8080/smart_home/appareil/${id}`);
  }

  updateAppareil(id:Number,Appareill:AppareilModule):Observable<AppareilModule>{
    return this._http.put<AppareilModule>(`http://localhost:8080/smart_home/appareil/${id}`,Appareill);
  }

  addAppareil(id:Number,Appareill:AppareilModule):Observable<AppareilModule>{
    return this._http.post<AppareilModule>(`http://localhost:8080/smart_home/categorie/${id}`,Appareill);
  }

  DeleteAppareil(id:Number):Observable<Object>{
      return this._http.delete(`http://localhost:8080/smart_home/appareil/${id}`);
  }
}

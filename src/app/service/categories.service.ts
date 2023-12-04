import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesModule } from '../Models/categories/categories.module';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private _http:HttpClient) { }

  categories:Number;

  GetAll():Observable<CategoriesModule[]>{
    return this._http.get<CategoriesModule[]>("http://localhost:8080/smart_home/categorie");
  }

  GetById(id:Number):Observable<CategoriesModule>{
    return this._http.get<CategoriesModule>(`http://localhost:8080/smart_home/categorie/${id}`);
  }

  updateCategorie(id:Number,Categories:CategoriesModule):Observable<CategoriesModule>{
    return this._http.put<CategoriesModule>(`http://localhost:8080/smart_home/categorie/${id}`,Categories);
  }

  addCategorie(Categorie:CategoriesModule):Observable<CategoriesModule>{
    return this._http.post<CategoriesModule>(`http://localhost:8080/smart_home/categorie`,Categorie);
  }

  DeleteCategorie(id:Number):Observable<Object>{
      return this._http.delete(`http://localhost:8080/smart_home/categorie/${id}`);
  }
}

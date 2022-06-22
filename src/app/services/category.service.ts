import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../model/Categoria'
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  postCategory(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(`${environment.apiUrl}/categorias/add`, categoria)
  }


}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Observable } from 'rxjs';
import { Categoria } from '../model/Categoria';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient, private matSnackBar: MatSnackBar) {}

  // CREATE
  postCategory(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(
      `${environment.apiUrl}/categorias/add`,
      categoria
    );
  }

  // READ
  getAllCategories(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${environment.apiUrl}/categorias`);
  }

  // UPDATE
  updateCategory(categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>(
      `${environment.apiUrl}/categorias/atualizar`,
      categoria
    );
  }

  // DELETE
  deleteCategory(id: number): Observable<Categoria> {
    return this.http.delete<Categoria>(
      `${environment.apiUrl}/categorias/deletar/${id}`
    );
  }

  //Método Mostra msg cadastrado com sucesso
  showSuccessMsgPost(msg: string) {
    this.matSnackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: 'right', //talvez mudar pada center e center!
      verticalPosition: 'top',
    });
  }

  //Método Mostra msg atualizado com sucesso
  showSuccessMsgPut(msg: string) {
    this.matSnackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: 'right', //talvez mudar pada center e center!
      verticalPosition: 'top',
    });
  }
  
}

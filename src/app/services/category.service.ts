import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Observable } from 'rxjs';
import { Categoria } from '../model/Categoria'
import { environment } from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private matSnackBar: MatSnackBar,
    ) { }

  // CREATE
  postCategory(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(`${environment.apiUrl}/categorias/add`, categoria)
  }

  // READ
  getAllCategories(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${environment.apiUrl}/categorias`)
  }

//   navigateToVerTodos(): void {
//     this.router.navigate(['./categorias'])
//   }

  // UPDATE 

  // DELETE
  deleteCategory(id: number): Observable<Categoria> {
    return this.http.delete<Categoria>(`${environment.apiUrl}/categorias/${id}`)
  }


  //Método Mostra msg Cadastrado com sucesso
  showMsgPostSuccess(msg: string) {
    this.matSnackBar.open(msg, '', {
        duration: 3000,
        horizontalPosition: "right", //talvez mudar pada center e center!
        verticalPosition: "top"
    });
  }




}

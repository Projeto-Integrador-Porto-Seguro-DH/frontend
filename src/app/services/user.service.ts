import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${environment.apiUrl}/usuarios/${id}`);
  }

  update(user: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(
      `${environment.apiUrl}/usuarios/update`,
      user
    );
  }

  delete(email: string): Observable<Usuario> {
    return this.http.delete<Usuario>(
      `${environment.apiUrl}/usuarios/delete/${email}`
    );
  }
}

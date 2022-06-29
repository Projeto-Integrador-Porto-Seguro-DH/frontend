import { Pedido } from 'src/app/model/Pedido';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { DetalhePedido } from '../model/DetalhePedido';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  constructor(private http: HttpClient) {}

  postPedido(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(`${environment.apiUrl}/pedidos/add`, pedido);
  }

  getById(idDoPedido: number): Observable<Pedido> {
    return this.http.get<Pedido>(`${environment.apiUrl}/pedidos/${idDoPedido}`);
  }

  getByUser(idDoUsuario: number): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(
      `${environment.apiUrl}/pedidos/user/${idDoUsuario}`
    );
  }

  getAll(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${environment.apiUrl}/pedidos`);
  }

  updatePedido(pedido: Pedido): Observable<Pedido> {
    return this.http.put<Pedido>(
      `${environment.apiUrl}/pedidos/update`,
      pedido
    );
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Categoria } from '../../../model/Categoria';

@Component({
  selector: 'app-category-crud',
  templateUrl: './category-crud.component.html',
  styleUrls: ['./category-crud.component.css']
})
export class CategoryCrudComponent implements OnInit {
  public categoriaLista: Categoria[];
  categoria: Categoria = new Categoria();

  @ViewChild('cadastrar') cadastrar: any;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
  }

  clearFormCadastrar() {
    this.cadastrar.nativeElement.value = '';
  }

  delete(){
  }

  refresh(){
  }

  pegarId(id: number) {

  }
  
}

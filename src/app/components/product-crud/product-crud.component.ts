import { Component, OnInit, ViewChild } from '@angular/core';
import { Produto } from '../../model/Produto'

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css','../user-personal-info/user-personal-info.component.css']
})
export class ProductCrudComponent implements OnInit {
  public produto: Produto;
  preco: number = 0;

  @ViewChild('cadastrar') cadastrar: any;
  @ViewChild('consultar') consultar: any;
  @ViewChild('atualizar') atualizar: any;
  @ViewChild('deletar') deletar: any;

  constructor() { }

  ngOnInit(): void {
    this.produto = {
      idProduto: 0,
      nomeProduto: '',
      descricaoProduto: '',
      precoUnitarioProduto: 0,
      estoqueProduto: 0,
      produtoDisponivel: true,
      detalhePedido: [],
    }
  }

// implementar o crud

// transfInfo(limpar: any){
//   this.formulario = limpar;
//   this.clearForm();
// }

clearFormCadastrar(): void {
  this.cadastrar.nativeElement.value = '';
}

clearFormConsultar(): void {
  this.consultar.nativeElement.value = '';
}

clearFormAtualizar(): void {
  this.atualizar.nativeElement.value = '';
}

clearFormDeletar(): void {
  this.deletar.nativeElement.value = '';
}


}



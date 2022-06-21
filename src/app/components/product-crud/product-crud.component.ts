import { first } from 'rxjs/operators';
import { ProductService } from './../../services/product.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Produto } from '../../model/Produto'

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css','../user-personal-info/user-personal-info.component.css']
})
export class ProductCrudComponent implements OnInit {
  public produtos: Produto[];
  preco: number = 0;
  produto = new Produto();
  produtoSalvo = new Produto();


  @ViewChild('cadastrar') cadastrar: any;
  @ViewChild('consultar') consultar: any;
  @ViewChild('atualizar') atualizar: any;
  @ViewChild('deletar') deletar: any;

  constructor(private productService: ProductService) { }

  refresh(): void{
    window.location.reload();
  }

  ngOnInit(): void {
    this.productService.getProduct().subscribe((resp: Produto[])=>{
      this.produtos=resp;
    })
  }

  onSubmit(): void {
  this.productService.postProduct(this.produto).subscribe((resp: Produto)=>{
    this.produtoSalvo=resp;
    alert('Produto cadastrado com sucesso!')
  })}

  delete(): void{
    
  }


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



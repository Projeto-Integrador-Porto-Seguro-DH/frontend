import { Component, OnInit, ViewChild } from '@angular/core';
import { first } from 'rxjs';
import { Produto } from 'src/app/model/Produto';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  public produtos: Produto[];
  preco: number = 0;
  produto = new Produto();
  produtoSalvo = new Produto();
  erro = '';


  @ViewChild('cadastrar') cadastrar: any;


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


clearFormCadastrar(): void {
  this.cadastrar.nativeElement.value = '';
}

}




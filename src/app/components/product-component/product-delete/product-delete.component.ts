import { first } from 'rxjs/operators';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Produto } from 'src/app/model/Produto';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css'],
})
export class ProductDeleteComponent implements OnInit {
  public produtos: Produto[];
  preco: number = 0;
  produto = new Produto();
  produtoSalvo = new Produto();
  erro = '';
  index: number;

  @ViewChild('deletar') deletar: any;

  constructor(private productService: ProductService) {}

  refresh(): void {
    window.location.reload();
  }

  ngOnInit(): void {
    this.productService.getProduct().subscribe((resp: Produto[]) => {
      this.produtos = resp;
    });
  }

  onSubmit(): void {
    this.productService.postProduct(this.produto).subscribe((resp: Produto) => {
      this.produtoSalvo = resp;
      alert('Produto cadastrado com sucesso!');
    });
  }

  pegarId(id: number) {
    this.index = id;
  }


}

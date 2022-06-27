import { CategoryService } from './../../../services/category.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { first } from 'rxjs';
import { Produto } from 'src/app/model/Produto';
import { ProductService } from 'src/app/services/product.service';
import { Categoria } from 'src/app/model/Categoria';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  produto = new Produto();
  erro = '';
  categorias: Categoria[];

  @ViewChild('cadastrar') cadastrar: any;


  constructor(
    private productService: ProductService,
    private categoryService: CategoryService) { }

  refresh(): void{
    window.location.reload();
  }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe((resp: Categoria[])=>{
      this.categorias = resp;
    })
  }

  onSubmit(): void {
  this.productService.postProduct(this.produto).subscribe((resp: Produto)=>{
    this.produto = resp;
    alert('Produto cadastrado com sucesso!')
    this.refresh()
  })}


clearFormCadastrar(): void {
  this.cadastrar.nativeElement.value = '';
}

}




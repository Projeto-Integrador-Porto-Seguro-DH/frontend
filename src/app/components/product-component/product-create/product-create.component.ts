import { AlertService } from './../../../services/alert.service';
import { CategoryService } from './../../../services/category.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { first } from 'rxjs';
import { Produto } from 'src/app/model/Produto';
import { ProductService } from 'src/app/services/product.service';
import { Categoria } from 'src/app/model/Categoria';
import {
  FormGroup,
  Validators,
  FormControl,
  FormBuilder,
} from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent implements OnInit {
  produto = new Produto();
  erro = '';
  categorias: Categoria[];

  loading = false;

  productForm!: FormGroup;

  @ViewChild('cadastrar') cadastrar: any;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private alertService: AlertService,
    private formBuilder: FormBuilder
  ) {}

  refresh(): void {
    window.location.reload();
  }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe((resp: Categoria[]) => {
      this.categorias = resp;
    });

    this.productForm = new FormGroup({
      nomeProduto: new FormControl('', [Validators.required]),
      descricaoProduto: new FormControl('', [Validators.required]),
      precoUnitarioProduto: new FormControl('', [Validators.required]),
      estoqueProduto: new FormControl('', [Validators.required]),
      fotoProduto: new FormControl('', [Validators.required]),
      categoria: new FormControl({}),
      produtoDisponivel: new FormControl(true),
    });
  }

  get nomeProduto() {
    return this.productForm.get('nomeProduto')!;
  }

  get descricaoProduto() {
    return this.productForm.get('descricaoProduto')!;
  }

  get precoUnitarioProduto() {
    return this.productForm.get('precoUnitarioProduto')!;
  }

  get estoqueProduto() {
    return this.productForm.get('estoqueProduto')!;
  }

  get fotoProduto() {
    return this.productForm.get('fotoProduto')!;
  }

  get categoria() {
    return this.productForm.get('categoria')!;
  }

  onSubmit(): void {
    this.loading = true;

    if (this.productForm.invalid) {
      this.loading = false;
      return;
    }

    this.transformData();

    this.productService.postProduct(this.produto).subscribe((resp: Produto) => {
      this.produto = resp;
      this.alertService.alertSuccess('Produto cadastrado com sucesso!');
      this.refresh();
    });
  }

  clearFormCadastrar(): void {
    this.cadastrar.nativeElement.value = '';
  }

  setCategory(categoriaSelecionada: Categoria) {
    this.produto.categoria = categoriaSelecionada;
    console.log(this.produto.categoria);
  }

  findCategory() {
    let categ = this.categorias.find((item) =>
      item.nomeCategoria?.includes(this.productForm.get('categoria')?.value)
    );

    // let categ = new Categoria();

    // this.categorias.forEach(item => {
    //   if(item.nomeCategoria == )
    // })

    console.log('Id ' + categ?.idCategoria);
    console.log('Nome ' + categ?.nomeCategoria);

    return categ;
  }

  transformData() {
    this.produto.nomeProduto = this.productForm.get('nomeProduto')?.value;
    this.produto.descricaoProduto =
      this.productForm.get('descricaoProduto')?.value;
    this.produto.precoUnitarioProduto = this.productForm.get(
      'precoUnitarioProduto'
    )?.value;
    this.produto.estoqueProduto = this.productForm.get('estoqueProduto')?.value;
    this.produto.fotoProduto = this.productForm.get('fotoProduto')?.value;
    this.produto.categoria = this.findCategory();
    this.produto.produtoDisponivel =
      this.productForm.get('produtoDisponivel')?.value;
  }
}

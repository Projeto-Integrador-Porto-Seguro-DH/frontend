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
  index: number;


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
    this.productService.deleteProduct(this.index).pipe(first()).subscribe({next:()=>{
      alert('Produto deletado com sucesso!')
    },
      error:(error)=>{
        this.erro = error;
        console.log(this.erro)
      }
    })
  }

  pegarId(id: number){
    this.index = id;
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




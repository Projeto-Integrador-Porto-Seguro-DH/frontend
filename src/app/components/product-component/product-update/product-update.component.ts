import { first } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/Produto';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute) { }

  produto = new Produto();

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.productService.getById(id).subscribe((resp: Produto)=>{
      this.produto = resp
    })
  }

  onSubmit(){

  }

  refresh(){

  }

  clearFormAtualizar(){

  }
}

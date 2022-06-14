import { ProductCardComponent } from './../product-card/product-card.component';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-product-group',
  templateUrl: './product-group.component.html',
  styleUrls: ['./product-group.component.css'],
})
export class ProductGroupComponent implements OnInit, AfterViewInit {
  public categoria: string;

  @ViewChild(ProductCardComponent)
  card: ProductCardComponent;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.categoria = this.card.categoria;
    this.cdRef.detectChanges();
  }
}

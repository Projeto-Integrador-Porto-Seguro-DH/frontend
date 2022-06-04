import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-group',
  templateUrl: './product-group.component.html',
  styleUrls: ['./product-group.component.css'],
})
export class ProductGroupComponent implements OnInit {
  public categoria: string = 'Queijos';

  constructor() {}

  ngOnInit(): void {}
}

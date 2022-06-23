import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity-input',
  templateUrl: './quantity-input.component.html',
  styleUrls: ['./quantity-input.component.css'],
})
export class QuantityInputComponent implements OnInit {
  @Input() quantidadeProduto = 1;

  constructor() {}

  ngOnInit(): void {}

  updateValue(event: any) {
    this.quantidadeProduto = event.target.value;

    if (this.quantidadeProduto > 100) {
      this.quantidadeProduto = 100;
    }
    if (this.quantidadeProduto < 1) {
      this.quantidadeProduto = 1;
    }
  }

  //Método subtrair
  subtrair() {
    if (this.quantidadeProduto > 1) {
      this.quantidadeProduto--;
    }
  }

  //Método somar
  somar() {
    if (this.quantidadeProduto < 100) {
      this.quantidadeProduto++;
    }
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity-input',
  templateUrl: './quantity-input.component.html',
  styleUrls: ['./quantity-input.component.css']
})
export class QuantityInputComponent implements OnInit {

  value = 0;

  constructor() { }

  ngOnInit(): void {
  }

  //Método subtrair
  subtrair() {
    this.value--;
  }

  //Método somar
  somar() {
    this.value++;
  }

}

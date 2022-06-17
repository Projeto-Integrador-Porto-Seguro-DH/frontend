import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  isAuthenticated(): boolean {
    return true;
  }

  isAdmin(): boolean {
    if (this.isAuthenticated()) {
      return true;
    }
    return false;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-tabs',
  templateUrl: './profile-tabs.component.html',
  styleUrls: ['./profile-tabs.component.css', '../menu/menu.component.css'],
})
export class ProfileTabsComponent implements OnInit {
  admin: boolean;

  constructor() {}

  ngOnInit(): void {}

  isAdmin(): boolean {
    return false;
  }
}

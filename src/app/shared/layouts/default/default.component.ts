import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent implements OnInit {
  isOpened = true;

  constructor() {}

  ngOnInit(): void {}

  toggleSideNav() {
    this.isOpened = !this.isOpened;
  }
}

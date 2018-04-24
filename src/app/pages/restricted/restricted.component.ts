import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restricted',
  templateUrl: './restricted.component.html',
  styleUrls: ['./restricted.component.css']
})
export class RestrictedComponent implements OnInit {

  showDrawer = false;

  constructor() { }

  ngOnInit() {
  }

  toggleDrawer() {
    this.showDrawer = !this.showDrawer;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restricted',
  templateUrl: './restricted.component.html',
  styleUrls: ['./restricted.component.css']
})
export class RestrictedComponent implements OnInit {

  pristineDrawer = true;
  showDrawer = false;

  constructor() { }

  ngOnInit() {
  }

  toggleDrawer() {
    this.pristineDrawer = false;
    this.showDrawer = !this.showDrawer;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pos-print',
  templateUrl: './pos-print.component.html',
  styleUrls: ['./pos-print.component.css']
})
export class PosPrintComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  print() {
    window.print();
  }

}

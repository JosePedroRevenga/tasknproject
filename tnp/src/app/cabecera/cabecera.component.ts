import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {

  title:string = "Tasks n' Projects";
  constructor() { }

  ngOnInit() {
  }

}

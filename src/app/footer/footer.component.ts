import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {

  protected date: number;

  constructor () {
    this.date = new Date().getFullYear();
  }

  ngOnInit () {
  }

}
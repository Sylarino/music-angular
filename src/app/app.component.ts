import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition, query, sequence, stagger } from '@angular/animations';
import { DropDownAnimation} from './animations/dropdownnav';
declare const $:any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    DropDownAnimation
  ]
})
export class AppComponent implements OnInit{
  title = 'music-angular';
  public showNav!: boolean;
  isOpen = false;
  constructor() {

  }
  
  ngOnInit(): void {
    this.showNav = false;
  }

  get stateName() {
    return this.showNav ? 'show' : 'hide'
  }

  showNavbar() {
    this.showNav = !this.showNav;
  }
}

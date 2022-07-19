import { Component, OnInit } from '@angular/core';
declare const $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(() =>{
      $('.bxslider').bxSlider({
        mode: 'fade'
      });

      $('.bxslider-reviews').bxSlider({
        mode: 'fade',
        slideWidth: '300px'
      });
    });
  }

}

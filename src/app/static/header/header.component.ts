import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  imageSrc = 'assets/header/logo.png'
  imageAlt = 'logo'
  page = {
    title: 'Painting Community'
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}

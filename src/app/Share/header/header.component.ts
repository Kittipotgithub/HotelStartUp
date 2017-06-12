import { SidebarComponent } from './../sidebar/sidebar.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //for menu sidebar
  displaySideBar = 'none'
  constructor() { }

  ngOnInit() {
  }

  openAndCloseSideBar() {
    if (this.displaySideBar === 'block') {
      this.displaySideBar = 'none'
    }
    else {
      this.displaySideBar = 'block'
    }
  }



}

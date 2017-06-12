import { HeaderComponent } from './../header/header.component';
import { MenuItem } from 'primeng/primeng';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [HeaderComponent]
})
export class SidebarComponent implements OnInit {

  @Input() getDisplaySideBar;
  constructor() {

  }

  ngOnInit() {

  }

}

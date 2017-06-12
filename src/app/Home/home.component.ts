import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    private items: MenuItem[];

    ngOnInit() {
        this.items = [
                    {label: 'จองห้องพัก', icon: 'fa-check-circle-o'},
                    {label: 'ดูประวัติการเข้าพัก', icon: 'fa-search  '},
                    {label: 'สรุปยอดทั้งหมด', icon: 'fa-btc  '},
                    {label: 'ตั้งราคาห้องพัก', icon: 'fa-cog  '}
                ];
    }
}

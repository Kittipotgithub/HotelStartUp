import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/primeng';

@Component({
  selector: 'app-summary-money',
  templateUrl: './summary-money.component.html',
  styleUrls: ['./summary-money.component.css']
})
export class SummaryMoneyComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  msgs: Message[] = [];

  showInfo() {
    this.msgs.push({ severity: 'info', summary: 'ค้นหา', detail: 'เรียบร้อยแล้ว' });
  }

  showSuccess() {
    this.msgs.push({ severity: 'success', summary: 'ยืนยัน', detail: 'เรียบร้อยแล้ว' });
  }

  hide() {
    this.msgs = [];
  }

}

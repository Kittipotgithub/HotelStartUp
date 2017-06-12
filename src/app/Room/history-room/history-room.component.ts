import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/primeng';

@Component({
  selector: 'app-history-room',
  templateUrl: './history-room.component.html',
  styleUrls: ['./history-room.component.css']
})
export class HistoryRoomComponent implements OnInit {

  date: Date;

  constructor() { }

  ngOnInit() {

  }

  msgs: Message[] = [];

  showInfo() {
    this.msgs.push({ severity: 'info', summary: 'ค้นหา', detail: 'เรียบร้อยแล้ว' });
  }

  showError() {
    this.msgs.push({ severity: 'error', summary: 'เคลียร์', detail: 'เรียบร้อยแล้ว' });
  }

  hide() {
    this.msgs = [];
  }

}

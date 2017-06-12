import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/primeng';

@Component({
  selector: 'app-rent-room',
  templateUrl: './rent-room.component.html',
  styleUrls: ['./rent-room.component.css']
})
export class RentRoomComponent implements OnInit {

  date: Date;
  selectedPrice: string[] = [];
  images: any[];

  constructor() {
    this.images = [];
    this.images.push({ source: '', thumbnail: '', title: 'Picture' });

  }

  ngOnInit() {

  }

  msgs: Message[] = [];

  showInfo() {
    this.msgs.push({ severity: 'info', summary: 'แสกนข้อมูล', detail: 'เรียบร้อยแล้ว' });
  }

  showSuccess() {
    this.msgs.push({ severity: 'success', summary: 'บันทึก', detail: 'เรียบร้อยแล้ว' });
  }

  showError() {
    this.msgs.push({ severity: 'error', summary: 'ยกเลิก', detail: 'เรียบร้อยแล้ว' });
  }

  hide() {
    this.msgs = [];
  }

}

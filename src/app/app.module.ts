import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminEditRoomComponent } from './Room/admin-edit-room/admin-edit-room.component';
import { RentRoomComponent } from './Room/rent-room/rent-room.component';
import { ConfirmRentRoomComponent } from './Room/confirm-rent-room/confirm-rent-room.component';
import { HistoryRoomComponent } from './Room/history-room/history-room.component';
import { SummaryMoneyComponent } from './Room/summary-money/summary-money.component';
import { routing } from './app.routing';
import { Routes, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';
import { MenuModule, MenuItem } from 'primeng/primeng';
import { CalendarModule } from 'primeng/primeng';
import { CheckboxModule } from 'primeng/primeng';
import { LightboxModule } from 'primeng/primeng';
import { FieldsetModule } from 'primeng/primeng';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { PaginatorModule } from 'primeng/primeng';
import { SidebarComponent } from './Share/sidebar/sidebar.component';
import { ReceptionComponent } from './Reception/reception/reception.component';
import { HeaderComponent } from './Share/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminEditRoomComponent,
    RentRoomComponent,
    HistoryRoomComponent,
    ConfirmRentRoomComponent,
    SummaryMoneyComponent,
    SidebarComponent,
    ReceptionComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ButtonModule,
    InputTextModule,
    GrowlModule,
    MenuModule,
    CalendarModule,
    CheckboxModule,
    LightboxModule,
    FieldsetModule,
    DataTableModule,
    PaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

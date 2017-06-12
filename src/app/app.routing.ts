import { HeaderComponent } from './Share/header/header.component';
import { SidebarComponent } from './Share/sidebar/sidebar.component';
import { ReceptionComponent } from './Reception/reception/reception.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [

    {
        path: 'reception', component: ReceptionComponent,
        children: [
            // { path: '', component: SidebarComponent, outlet: "sidebar" },
            { path: '', component: HeaderComponent, outlet: "header" },
            // { path: 'rent-room', component: RentRoomComponent },
            
        ]
    },



];
export const routing = RouterModule.forRoot(appRoutes);
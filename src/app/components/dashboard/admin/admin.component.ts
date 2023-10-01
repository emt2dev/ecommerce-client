import { Component } from '@angular/core';
import { PanelComponent } from 'src/app/modules/scope/dashboard/admin/panel/panel.component';
import { ReportsComponent } from 'src/app/modules/scope/dashboard/admin/reports/reports.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    PanelComponent,
    ReportsComponent,
  ],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

}

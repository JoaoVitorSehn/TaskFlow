import { Component } from '@angular/core';
import { ContainerComponent } from "../../shared/container/container.component";
import { LeftSidebarComponent } from '../../shared/left-sidebar/left-sidebar.component';
import { MainComponent } from "../main/main.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ContainerComponent,
    LeftSidebarComponent,
    MainComponent
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
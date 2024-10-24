import { Component } from '@angular/core';
import { ContainerComponent } from "../../shared/container/container.component";
import { LeftSidebarComponent } from "./left-sidebar/left-sidebar.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ContainerComponent, 
    LeftSidebarComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
import { Component } from '@angular/core';
import { HomeComponent } from "../home/home.component";
import { LeftSidebarComponent } from "../../shared/left-sidebar/left-sidebar.component";
import { ContainerComponent } from "../../shared/container/container.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HomeComponent, LeftSidebarComponent, ContainerComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}

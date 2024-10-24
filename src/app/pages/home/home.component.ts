import { Component } from '@angular/core';
import { ContainerComponent } from "../../shared/container/container.component";
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ContainerComponent,
    MatButtonModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router : Router){}

  experimenteButtonClick(){
    this.router.navigate(['dashboard']);
  }
}
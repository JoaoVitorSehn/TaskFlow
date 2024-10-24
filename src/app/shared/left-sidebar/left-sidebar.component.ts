import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.scss'
})

export class LeftSidebarComponent {
constructor(private router : Router){}

    isLeftSidebarCollapsed : boolean = true;

    items = [
      {
        routeLink: 'consulta-ordem-servico',
        icon: 'inbox_customize',
        label: 'Ordem Serviço',
      },
      {
        routeLink: 'consulta-clientes',
        icon: 'group',
        label: 'Clientes',
      },
      {
        routeLink: 'consulta-funcionarios',
        icon: 'engineering',
        label: 'Funcionários',
      },
      {
        routeLink: 'settings',
        icon: 'settings',
        label: 'Settings',
      },
    ];

    toggleNavSide() : void {
      this.isLeftSidebarCollapsed = !this.isLeftSidebarCollapsed;
    }

    navigate(link : string) : void{
      this.router.navigate([link])
      this.isLeftSidebarCollapsed = true;
    }
}
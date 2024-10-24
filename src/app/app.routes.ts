import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ConsultaClientesComponent } from './pages/consulta-clientes/consulta-clientes.component';
import { ConsultaFuncionariosComponent } from './pages/consulta-funcionarios/consulta-funcionarios.component';
import { ConsultaOrdemServicoComponent } from './pages/consulta-ordem-servico/consulta-ordem-servico.component';
import { SettingsComponent } from './pages/settings/settings.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "dashboard",
        component: DashboardComponent
    },
    {
        path: "consulta-clientes",
        component: ConsultaClientesComponent
    },
    {
        path: "consulta-funcionarios",
        component: ConsultaFuncionariosComponent
    },
    {
        path: "consulta-ordem-servico",
        component: ConsultaOrdemServicoComponent
    },
    {
        path: "settings",
        component: SettingsComponent
    }
];
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { CursoClaseBComponent } from "./components/curso-clase-b/curso-clase-b.component";
import { LoginComponent } from "./components/login/login.component";
import { FormPagoComponent } from "./components/form-pago/form-pago.component";
import { FormularioComponent } from "./pago-plan/formulario/formulario.component";

const APP_ROUTES: Routes = [
    
    { path: 'home', component: HomeComponent,
        },
    
    { path: 'curso-claseB', component: CursoClaseBComponent},
    { path: 'login', component: LoginComponent},
    { path: 'form-component', component: FormPagoComponent},
    { path: 'formulario', component: FormularioComponent, data: {imageUrl:'/assets/fondo-formulario.png'}},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
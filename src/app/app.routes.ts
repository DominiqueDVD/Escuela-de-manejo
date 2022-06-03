import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { CursoClaseBComponent } from "./components/curso-clase-b/curso-clase-b.component";
import { LoginComponent } from "./components/login/login.component";
import { FormPagoComponent } from "./components/form-pago/form-pago.component";
import { FormularioComponent } from "./pago-plan/formulario/formulario.component";
import { ContactoComponent } from "./contacto/contacto.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { AgendaComponent } from "./agenda/agenda.component";
import { AlumnoComponent } from "./perfiles/alumno/alumno.component";
import { InstructorComponent } from "./perfiles/instructor/instructor.component";
import { RecepcionComponent } from "./perfiles/recepcion/recepcion.component";
import { VerDatosComponent } from "./perfiles/recepcion/ver-datos/ver-datos.component";
import { DatosEstudiantesComponent } from "./perfiles/recepcion/ver-datos/datos-estudiantes/datos-estudiantes.component";
import { DatosInstructoresComponent } from "./perfiles/recepcion/ver-datos/datos-instructores/datos-instructores.component";


const APP_ROUTES: Routes = [

    { path: 'home', component: HomeComponent,
        },

    { path: 'curso-claseB', component: CursoClaseBComponent},
    { path: 'login', component: LoginComponent},
    { path: 'form-component', component: FormPagoComponent},
    { path: 'formulario', component: FormularioComponent},
    { path: 'contacto', component: ContactoComponent},
    { path: 'calendario', component: CalendarComponent},
    { path: 'agenda', component: AgendaComponent},
    { path: 'alumno', component: AlumnoComponent},
    { path: 'instructor', component: InstructorComponent},
    { path: 'recepcion', component: RecepcionComponent},
    { path: 'ver-datos', component: VerDatosComponent},
    { path: 'datos-estudiantes', component: DatosEstudiantesComponent},
    { path: 'datos-instructores', component: DatosInstructoresComponent},

    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

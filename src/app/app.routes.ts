import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ToDoComponent } from './Components/todo/to-do.component';
import { DetailsComponent } from './Components/details/details.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { AboutusComponent } from './Components/about-us/aboutus.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

export const routes: Routes = [
    {path: '', redirectTo: 'todo', pathMatch: 'full'},
    {path: 'home', component: HomeComponent, title: 'home'},
    {path: 'todo', component: ToDoComponent, title: 'todo'},
    {path: 'todo/:id', component: DetailsComponent, title: 'details'},
    {path: 'contact', component: ContactUsComponent, title: 'contact'},
    {path: 'about', component: AboutusComponent, title: 'about'},
    {path: '**', component: NotFoundComponent, title: 'notFound'}
];

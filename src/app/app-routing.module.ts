import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutComponent } from './home/about.component';
import { ContactComponent } from './home/contact.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './home/error.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'home', component: HomeComponent },
            { path: 'about', component: AboutComponent },
            { path: 'contact', component: ContactComponent },
            { path: 'error', component: ErrorComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: '**', redirectTo: 'error', pathMatch: 'full' }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }

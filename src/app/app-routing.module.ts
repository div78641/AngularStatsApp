import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'about', component: AboutComponent },
            { path: 'contact', component: ContactComponent },
            { path: '', redirectTo: 'about', pathMatch: 'full' },
            { path: '**', redirectTo: 'about', pathMatch: 'full' }
                ])
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }

import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { StandingsComponent } from './mlb/standings/standings.component';
import { RunsperhitComponent } from './mlb/runsperhit/runsperhit.component';

const MAINMENU_ROUTES: Routes = [
    // full : makes sure the path is absolute path
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'mlb', redirectTo: '/', pathMatch: 'full' },
    { path: 'mlb/standings', component: StandingsComponent },
    { path: 'mlb/runsperhit', component: RunsperhitComponent }
];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);

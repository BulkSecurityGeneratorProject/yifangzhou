import { Route } from '@angular/router';

import { NavbarComponent } from './navbar.component';

export const navbarRoute: Route = {
    path: '',
    pathMatch: 'full',
    component: NavbarComponent,
    outlet: 'navbar'
};

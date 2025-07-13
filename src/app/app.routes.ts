import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './core/guards/auth.guard';
import { roleGuard } from './core/guards/role.guard';
import { UnsavedChangesGuard } from './core/guards/unsaved-changes.guards';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: '',
        canActivate: [authGuard],
        children: [
            {
                path: 'home',
                loadComponent: () => import('./pages/home/home.component').then(m=>m.HomeComponent)
            },
            {
                path: 'about',
                loadComponent: () => import('./pages/about/about.component').then(m=>m.AboutComponent),
                canActivate: [roleGuard(['admin'])]
            },
            {
                path: 'blogs',
                loadComponent: () => import('./pages/blogs/blogs.component').then(m=>m.BlogsComponent)
            },
            {
                path: 'contact-us',
                loadComponent: () => import('./pages/contact-us/contact-us.component').then(m=>m.ContactUsComponent),
                canActivate: [roleGuard(['user', 'admin'])],
                canDeactivate: [UnsavedChangesGuard]
            },
                        {
                path: 'material-buttons',
                loadComponent: () => import('./material/button/button.component').then(m=>m.ButtonComponent),
            },
        ]
    },
    { path: '**', redirectTo: 'login' }
];

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'all-contacts',
    pathMatch: 'full'
  },
  {
    path: 'all-contacts',
    loadChildren: () => import('./all-contacts/all-contacts.module').then(m => m.AllContactsPageModule)
  },
  {
    path: 'add-contact',
    loadChildren: () => import('./add-contact/add-contact.module').then(m => m.AddContactPageModule)
  },
  {
    path: 'updatecontact/:id',
    loadChildren: () => import('./update-contact/update-contact.module').then(m => m.UpdateContactPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

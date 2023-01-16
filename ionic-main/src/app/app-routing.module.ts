import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },  {
    path: 'contato-criar',
    loadChildren: () => import('./contato-criar/contato-criar.module').then( m => m.ContatoCriarPageModule)
  },
  {
    path: 'contato-editar',
    loadChildren: () => import('./contato-editar/contato-editar.module').then( m => m.ContatoEditarPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

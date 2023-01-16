import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContatoEditarPage } from './contato-editar.page';

const routes: Routes = [
  {
    path: '',
    component: ContatoEditarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContatoEditarPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContatoCriarPage } from './contato-criar.page';

const routes: Routes = [
  {
    path: '',
    component: ContatoCriarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContatoCriarPageRoutingModule {}

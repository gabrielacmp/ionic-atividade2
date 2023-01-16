import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContatoEditarPageRoutingModule } from './contato-editar-routing.module';

import { ContatoEditarPage } from './contato-editar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContatoEditarPageRoutingModule
  ],
  declarations: [ContatoEditarPage]
})
export class ContatoEditarPageModule {}

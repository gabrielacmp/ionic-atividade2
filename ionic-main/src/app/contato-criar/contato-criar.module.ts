import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContatoCriarPageRoutingModule } from './contato-criar-routing.module';

import { ContatoCriarPage } from './contato-criar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContatoCriarPageRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [ContatoCriarPage]
})
export class ContatoCriarPageModule {}

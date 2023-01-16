import { Injectable } from '@angular/core';
import { Contato } from './Contato'; 
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireList } from '@angular/fire/compat/database';
import { AngularFireObject } from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root',
})

export class ContatoService {
 
  contatoListRef!: AngularFireList<any>;
  contatoRef!: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {}
  // Create
  createContato(apt: Contato) {
    return this.contatoListRef.push({
      name: apt.name,
      email: apt.email,
      telefone: apt.telefone,
    });
  }
  // Get Single
  getContato(id: string) {
    this.contatoRef = this.db.object('/Contato/' + id);
    return this.contatoRef;
  }
  // Get List
  getListaContato() {
    this.contatoListRef = this.db.list('/Contato');
    return this.contatoListRef;
  }
  // Update
  updateContato(id: any, apt: Contato) {
    return this.contatoRef.update({
      name: apt.name,
      email: apt.email,
      telefone: apt.telefone,
    });
  }
  // Delete
  deleteContato(id: string) {
    this.contatoRef = this.db.object('/Contato/' + id);
    this.contatoRef.remove();
  }
}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ContatoService } from '../shared/contato.service';

@Component({
  selector: 'app-contato-criar',
  templateUrl: './contato-criar.page.html',
  styleUrls: ['./contato-criar.page.scss'],
})
export class ContatoCriarPage implements OnInit {

  contatoForm!: FormGroup;
  constructor(
    private aptService: ContatoService,
    private router: Router,
    public fb: FormBuilder
  ) { }
  ngOnInit() {
    this.contatoForm = this.fb.group({
      nome: [''],
      email: [''],
      telefone: ['']
    })
  }
  onSubmit(): void {
    if (!this.contatoForm.valid) {
        this.aptService.createContato(this.contatoForm.value).then(res => {
        console.log(res)
        this.contatoForm.reset();
        this.router.navigate(['/home']);
      })
        .catch(error => console.log(error));
    }
  }
}
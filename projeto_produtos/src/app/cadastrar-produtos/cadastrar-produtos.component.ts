import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
 
@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.component.html',
  styleUrls: ['./cadastrar-produtos.component.css']
})
export class CadastrarProdutosComponent implements OnInit {
 
  //atributo
  mensagem: string = '';
 
  constructor(
    private httpClient: HttpClient
  ) { }
 
  //montando a estrutura do formulário
  formCadastro = new FormGroup({
    //campos do formulário
    nome: new FormControl('', [Validators.required]),
    preco: new FormControl('', [Validators.required]),
    quantidade: new FormControl('', [Validators.required]),
    descricao: new FormControl('', [Validators.required])
  });
 
  //acessando o formulário/campos na página HTML
  get form(): any {
    return this.formCadastro.controls;
  }
 
  ngOnInit(): void {
  }
 
  //função para fazer a chamada do cadastro na API
  onSubmit(): void {
 
    this.httpClient.post(
      environment.apiUrl + '/produtos', this.formCadastro.value, { responseType: 'text' })
      .subscribe(
        data => {
          this.mensagem = data;
          this.formCadastro.reset();
        },
        e => {
          this.mensagem = "Ocorreu um erro, o cadastro não foi realizado.";
          console.log(e);
        }
      )
  }
 
}
 



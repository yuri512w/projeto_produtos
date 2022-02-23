import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-editar-produtos',
  templateUrl: './editar-produtos.component.html',
  styleUrls: ['./editar-produtos.component.css']
})
export class EditarProdutosComponent implements OnInit {
 
  //atributo
  mensagem: string = '';
 
  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) { }
 
  //função executada quando a página é aberta
  ngOnInit(): void {
 
    //capturar o id enviado pela URL
    const idProduto = this.activatedRoute.snapshot.paramMap.get('id') as string;
 
    //consultar o produto na API atraves do id
    this.httpClient.get(environment.apiUrl + "/produtos/" + idProduto)
      .subscribe(
        (data: any) => {
          //preenchendo os campos do formulário com os dados do produto
          this.formEdicao.patchValue(data);
        },
        (e) => {
          console.log(e);
        }
      )
  }
 
  //montando a estrutura do formulário
  formEdicao = new FormGroup({
    //campos do formulário
    idProduto: new FormControl(''),
    nome: new FormControl('', [Validators.required]),
    preco: new FormControl('', [Validators.required]),
    quantidade: new FormControl('', [Validators.required]),
    descricao: new FormControl('', [Validators.required])
  });
 
  //acessando o formulário/campos na página HTML
  get form(): any {
    return this.formEdicao.controls;
  }
 
  //função para fazer a chamada do edição na API
  onSubmit(): void {
 
    this.httpClient.put(
      environment.apiUrl + '/produtos', this.formEdicao.value, { responseType: 'text' })
      .subscribe(
        data => {
          this.mensagem = data;
        },
        e => {
          this.mensagem = "Ocorreu um erro, a edição não foi realizada.";
          console.log(e);
        }
      )
  }
 
}
 



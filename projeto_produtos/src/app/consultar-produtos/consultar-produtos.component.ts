import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
 
@Component({
  selector: 'app-consultar-produtos',
  templateUrl: './consultar-produtos.component.html',
  styleUrls: ['./consultar-produtos.component.css']
})
export class ConsultarProdutosComponent implements OnInit {
 
  //atributo para armazenar os dados dos produtos
  produtos: any[] = [];
 
  //injeção de dependência
  constructor(
    private httpClient: HttpClient
  ) { }
 
  //método executado quando o componente é aberto
  ngOnInit(): void {
    this.httpClient.get(environment.apiUrl + '/produtos')
      .subscribe(
        (data) => {
          this.produtos = data as any[];
        },
        (e) => {
          console.log(e);
        }
      )
  }
 
  //função para fazer a exclusão do produto na API
  excluir(idProduto: number): void {
   
    if (window.confirm('Deseja realmente excluir o produto selecionado?')) {
 
      this.httpClient.delete(environment.apiUrl + "/produtos/" + idProduto,
        { responseType : 'text' })
        .subscribe(
          (data) => {
            alert(data); //exibir mensagem em uma janela popup
            this.ngOnInit(); //recarregar a consulta de produtos
          },
          (e) => {
            console.log(e);
          }
        )      
    }
  }
}
 



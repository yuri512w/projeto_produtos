import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
 
import { AppComponent } from './app.component';
import { CadastrarProdutosComponent } from './cadastrar-produtos/cadastrar-produtos.component';
import { ConsultarProdutosComponent } from './consultar-produtos/consultar-produtos.component';
 
//configurar uma rota (URL) para cada componente
const routes: Routes = [
  { path: 'cadastrar-produtos', component: CadastrarProdutosComponent },
  { path: 'consultar-produtos', component: ConsultarProdutosComponent }
]
 
@NgModule({
  declarations: [
    AppComponent,
    CadastrarProdutosComponent,
    ConsultarProdutosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 




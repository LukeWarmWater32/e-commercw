import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormUtenteComponent } from './form-utente/form-utente.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProdottoComponent } from './prodotto/prodotto.component';
import { TabellaProdComponent } from './tabella-prod/tabella-prod.component';
import { ModificaProdComponent } from './modifica-prod/modifica-prod.component';

const routes: Routes = [
  { path: 'form', component: FormUtenteComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: TabellaProdComponent },
  { path: 'insert', component: ProdottoComponent },
  { path: 'home', component: HomeComponent },
  { path: 'modify/:id', component: ModificaProdComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

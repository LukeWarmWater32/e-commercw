import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormUtenteComponent } from './form-utente/form-utente.component';
import { FormFornitoreComponent } from './form-fornitore/form-fornitore.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProdottoComponent } from './prodotto/prodotto.component';
import { CrudService } from './crud.service';
import { HttpClientModule } from '@angular/common/http';
import { TabellaProdComponent } from './tabella-prod/tabella-prod.component';
import { ModificaProdComponent } from './modifica-prod/modifica-prod.component';

@NgModule({
  declarations: [
    AppComponent,
    FormUtenteComponent,
    HomeComponent,
    LoginComponent,
    ProdottoComponent,
    TabellaProdComponent,
    ModificaProdComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [CrudService],
  bootstrap: [AppComponent],
})
export class AppModule {}

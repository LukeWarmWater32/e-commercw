import { Component, OnInit } from '@angular/core';
import { Prodotto } from '../model/prodotto';
import { CrudService } from '../crud.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-tabella-prod',
  templateUrl: './tabella-prod.component.html',
  styleUrls: ['./tabella-prod.component.css'],
})
export class TabellaProdComponent implements OnInit {
  prodotti: Prodotto[] = [];
  message!: string;
  crudService: any;
  token!:string;
  page!:number;
  nPagine!:number;
  currentProduct!:string;

  constructor(private crud: CrudService, private auth:AuthService) {}

  getProdotti(): void {
    this.crud.getProduct(this.page).subscribe((prodotti: Prodotto[]) => {
      this.prodotti = prodotti;
    });
  }

  getProducts(page:number):void{
    this.crudService.getProductsDim().subscribe((dim:number)=>{
      this.nPagine = Math.round(dim/5);
    })
    if(page<0){
      this.page = 0;
    }
    else if(page>this.nPagine){
      this.page = this.nPagine;
    }
    else{
      this.page = page;
    }
    this.crudService.getProduct(this.page).subscribe((prodotti:Prodotto[])=>{
      this.prodotti = this.prodotti;
      this.message = "";
    })
    if(this.prodotti.length==0){
      this.nPagine = this.nPagine-1;
    }
  }

  ngOnInit(): void {
    this.page=0;
    this.currentProduct = this.auth.currentProduct;
    this.token = this.auth.token;
    this.getProducts(this.page);
  }

  deleteProdotto(prodotto: Prodotto): void {
    let confirmation = confirm('Conferma la cancellazione del prodotto?');
    if (confirmation) {
      this.crud.deleteProduct(prodotto.id).subscribe((message: string) => {
        this.message = message;
        this.getProducts(this.page);
      });
    }
    };
  }


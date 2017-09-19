import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class ProductsService {

  products:any[] = [];
  products_filtered:any[] = [];
  loading:boolean = true;

  constructor( private http:Http ) {
    this.load_products();
  }

  public load_products(){
    this.loading = true;

    let promise = new Promise( ( resolve, reject ) => {

      this.http.get("https://webpage-7a336.firebaseio.com/products_idx.json")
        .subscribe( res => {
          this.products = res.json();
          this.loading = false;
          resolve();
      });
    });
    return promise;
  }

  public load_product( cod:string ){
    return this.http.get(`https://webpage-7a336.firebaseio.com/products/${cod}.json`);
  }

  public search_product( text:string){
    if( this.products.length === 0){
      this.load_products().then( () => {
        // load finished
        this.filter_products(text);
      });
    } else {
      this.filter_products(text);
    }
  }

  private filter_products( text:string ){
    this.products_filtered = [];
    text = text.toLowerCase();
    this.products.forEach( prod => {
      if( prod.categoria.indexOf( text ) >= 0 ||
          prod.titulo.toLowerCase().indexOf( text ) >= 0){
        this.products_filtered.push( prod );
      }
    })
  }

}

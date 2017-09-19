import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class ProductsService {

  products:any[] = [];
  loading:boolean = true;

  constructor( private http:Http ) {
    this.load_products();
  }

  public load_products(){
    this.loading = true;
    this.http.get("https://webpage-7a336.firebaseio.com/products_idx.json")
      .subscribe( res => {
        //console.log(res.json());
        this.products = res.json();
        this.loading = false;
    });
  }

}

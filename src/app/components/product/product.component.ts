import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductsService } from "../../services/products.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent {

  product:any = undefined;

  constructor( private route:ActivatedRoute,
               private _ps:ProductsService ) {
    route.params.subscribe( parameters => {
      _ps.load_product( parameters['id'] )
        .subscribe( res => {
          this.product = res.json();
          this.product.cod = parameters['id'];
        })
      ;
    })
  }


}

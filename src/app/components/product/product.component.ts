import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent {

  constructor( private route:ActivatedRoute) {
    route.params.subscribe( parameters => {
      console.log(parameters);
      console.log(parameters['id']);
    })
  }


}

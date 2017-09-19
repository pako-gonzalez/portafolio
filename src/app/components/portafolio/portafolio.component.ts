import { Component } from '@angular/core';
import { ProductsService } from "../../services/products.service";


@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
})
export class PortafolioComponent {

  constructor( public _ps:ProductsService ){

  }

}

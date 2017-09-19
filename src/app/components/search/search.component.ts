import { Component} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductsService } from "../../services/products.service"

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {

  text:string = undefined;

  constructor(  private route:ActivatedRoute,
                public _ps:ProductsService) {
    route.params.subscribe( parameters => {
      this.text = parameters['text'];
      _ps.search_product(this.text)
    })
  }
}

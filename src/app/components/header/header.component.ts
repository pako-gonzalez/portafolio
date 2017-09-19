import { Component } from '@angular/core';
import { InformationService } from "../../services/information.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  constructor(  public _is:InformationService,
                private router:Router){

  }

  search_product( text:string ){
    //console.log(text);
    this.router.navigate( ['search', text] );
  }

}

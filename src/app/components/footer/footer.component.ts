import { Component } from '@angular/core';
import { InformationService } from "../../services/information.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent {

  anio:number = new Date().getFullYear();

  constructor (public _is:InformationService){

  }

}

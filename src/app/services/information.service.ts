import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class InformationService {

  info:any = {};
  loaded:boolean = false;
  loaded_about:boolean = false;
  team:any[] = [];

  constructor(public http:Http ) {
    this.load_info();
    this.load_about();
  }

  public load_info(){
    this.http.get("assets/data/info.page.json")
      .subscribe( data =>{
          //console.log(data.json());
          this.loaded = true;
          this.info = data.json();
      });
  }

  public load_about(){
    this.http.get("https://webpage-7a336.firebaseio.com/team.json")
      .subscribe( data =>{
          //console.log(data.json());
          this.loaded_about = true;
          this.team = data.json();
      });
  }

}

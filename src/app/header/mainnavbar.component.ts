import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-mainnavbar',
    templateUrl: 'mainnavbar.component.html',
    styleUrls: ['mainnavbar.component.css']
  
})

export class MainNavbarComponent {

    @Input() img: string;
    

constructor() {

    this.img ="";
}
}

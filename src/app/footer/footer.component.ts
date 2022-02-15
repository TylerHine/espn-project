import { Component, Input } from "@angular/core"

@Component({
    selector: 'app-footer',
    templateUrl: 'footer.component.html',
    styleUrls: ['footer.component.css']
})
export class FooterComponent{

    @Input() img: string;
    @Input() ufc: string;

    constructor() {
        this.img = "";
        this.ufc = "";
    }
}
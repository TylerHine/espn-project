import { Component, Input } from "@angular/core"

@Component ({
    selector: "app-centercard",
    templateUrl: "centercard.component.html",
    styleUrls: ['centercard.component.css']
})

export class CenterCardComponent {
    @Input() img: string;
    @Input() title: string;

    constructor() {
        this.img = "";
        this.title = "xxxx xx xxxxxx";
    }
}
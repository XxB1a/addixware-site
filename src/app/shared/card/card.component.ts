import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    @Input() title: string;
    @Input() description: string;
    @Input() state: string;
    @Input() icon: string;
    @Input() technos: any[];
    @Input() agence: string = null;

    constructor() {
    }

    ngOnInit() {
    }

}

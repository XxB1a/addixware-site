import {Component, Input, OnInit} from '@angular/core';
import {ITechno} from '../../model/techno';
import {IGroup} from '../../model/group';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss']
})
export class OfferCardComponent implements OnInit {

  @Input() state: string;
  @Input() icon: string;

  @Input() title: string;
  @Input() content: string;
  @Input() salary: string;
  @Input() technos: ITechno[];
  @Input() group: IGroup;

  constructor() { }

  ngOnInit() {
  }

}

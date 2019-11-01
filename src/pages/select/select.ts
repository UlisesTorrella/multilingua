import { Component,Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { List } from 'ionic-angular';

@Component({
  selector: 'page-select',
  templateUrl: 'select.html',
})
export class SelectPage {
   @Input() languages : [object];
  constructor(public navCtrl: NavController) {
  }

}

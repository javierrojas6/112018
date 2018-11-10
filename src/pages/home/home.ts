import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProductosPage } from '../productos/productos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  openPage(page) {
    switch (page) {
      case 'productos':
        this.navCtrl.push(ProductosPage);
        break;
    }
  }
}

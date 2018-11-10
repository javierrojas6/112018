import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-productos',
  templateUrl: 'productos.html'
})
export class ProductosPage {

  constructor(public navCtrl: NavController) {
  }

  openPage(page) {
    switch (page) {
      case 'home':
        this.navCtrl.push(HomePage);
        break;
    }
  }
}

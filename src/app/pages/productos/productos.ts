import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-productos',
  templateUrl: 'productos.html'
})
export class ProductosPage {

  constructor(
    public navCtrl: NavController,
    private http: HttpClient
  ) {
    this.http.get('http://localhost:3000/product/get/all')
      .subscribe(response => {
        console.log(response);
      });
  }

  openPage(page) {
    switch (page) {
      case 'home':
        this.navCtrl.push(HomePage);
        break;
    }
  }
}

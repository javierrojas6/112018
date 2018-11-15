import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  constructor(
    public navCtrl: NavController,
    private http: HttpClient
  ) {
    this.http.get('http://localhost:3000/product/get/all')
      .subscribe(as => {
        console.log(as);
      });

  }
}

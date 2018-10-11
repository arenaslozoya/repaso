import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BotonPage } from '../boton/boton';
import { CardPage } from '../card/card';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  boton = BotonPage;
  card = CardPage;
  constructor(public navCtrl: NavController) {

  }
  clickBoton()
  {
    this.navCtrl.push(this.boton);
  }
  clickCard()
  {
    this.navCtrl.push(this.card);
  }
}

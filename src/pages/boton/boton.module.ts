import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BotonPage } from './boton';

@NgModule({
  declarations: [
    BotonPage,
  ],
  imports: [
    IonicPageModule.forChild(BotonPage),
  ],
})
export class BotonPageModule {}

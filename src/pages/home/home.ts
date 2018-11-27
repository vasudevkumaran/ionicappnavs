import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { MainPage } from '../main/main';
import { AddEditPage } from '../add-edit/add-edit';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public navPrams:NavParams) {

  }

  public onLoginBtnPressed(){
    this.navCtrl.push(LoginPage,{username:"vasudev"});
  }

  public onRegisterBtnPressed(){
    this.navCtrl.push(RegisterPage)
  }

  public onMainBtnPressed(){
    this.navCtrl.push(MainPage)
  }
  public onAddEditBtnPressed(){
    this.navCtrl.push(AddEditPage)
  }

}

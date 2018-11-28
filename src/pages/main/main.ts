import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private actionSheetCtrl:ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }
  public goBack(){
    this.navCtrl.pop()
  }

  public showMenu(){
    let actionSheet = this.actionSheetCtrl.create({
      title:"Menu",
      buttons:[
        {
          text:"Add Item",
          handler: ()=>{
            console.log("Add item Pressed")
          }
        },
        {
          text:"Profile",
          handler: ()=>{
            console.log("Profile Pressed")
          }
        },
        {
          text:"Logout",
          role:"destructive",
          handler: ()=>{
            console.log("Add item Pressed")
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present()
  }
}

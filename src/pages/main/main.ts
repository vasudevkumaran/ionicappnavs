import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { AppProvider } from '../../providers/app/app';

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
  public items = [];
  public listVisible = true;
  constructor(public navCtrl: NavController, public navParams: NavParams,private actionSheetCtrl:ActionSheetController,private srv:AppProvider) {
  }

  ionViewDidLoad() {
    console.log(this.srv.getLogin());

    this.srv.sendToServer('http://vasudevkumaran.com/ang/getallitems',this.srv.getLogin()).subscribe(data=>{
      console.log(data)
      this.items = data.items
    });
  }
  public goBack(){
    this.navCtrl.pop()
  }

  public toggleNgIf(){
    if (this.listVisible){
      this.listVisible = false;
    }else{
      this.listVisible = true;
    }
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

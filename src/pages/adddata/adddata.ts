import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Toast } from '@ionic-native/toast/ngx';

/**
 * Generated class for the AdddataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adddata',
  templateUrl: 'adddata.html',
})
export class AdddataPage {
  data = {date: "", type: "", description: "", amount:0 };
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public sqlite: SQLite, public toast: Toast ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdddataPage');
  }

  saveData(){
    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    })
      .then(
        (db:SQLiteObject)=>{
          db.executeSql('INSERT INTO expense VALUES(NULL,?,?,?,?)',
          [
            this.data.date,
            this.data.type,
            this.data.description,
            this.data.amount
          ])
          .then(res=>{
            console.log(res);
            //แสดง popup (toast)
              this.toast.show('Data saved', '3000', 'center')
                .subscribe(toast=>{
              this.navCtrl.popToRoot();
            }
            );
          })
          .catch(e =>{
            console.log(e);
              this.toast.show('Data saved', '3000', 'center')
                toast=>{
                  console.log(toast);
               }
            });
        })
          .catch(e =>{
            console.log(e);
              this.toast.show('Data saved', '3000', 'center')
                toast=>{
                  console.log(toast);
           }
        });
    }

}
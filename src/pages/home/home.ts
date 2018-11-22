import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private http: HttpClient,
  ) {



  }

  sendSMS() {
    let urr1 = "http://api.msg91.com/api/sendhttp.php?country=91&sender=SAMTHA&route=4&mobiles="
    let phone = "9493726705"
    let urr2 ="&authkey=248515ASS3bXdTM6iH5bf6582b&message=Numer Separated";
    let fU = urr1 + phone + urr2;
    this.http.get(fU, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
      },
    }).subscribe(snip=>{
      console.log(snip)
    })
  }

}

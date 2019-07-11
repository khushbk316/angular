import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class MusicService {

   
 

  constructor(private http:HttpClient) { }


  addToWishList(value) : any {
    console.log("hiii123i",value);
   this.http.post("http://localhost:8087/api/v1/track",value).subscribe();
 
  }

  getWishlist():any{
     return this.http.get("http://localhost:8087/api/v1/tracks");
  }


  getTrendMusic():any {
    return this.http.get("http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=96e57f35a56ebc8ff8c03398d2fa94b2&format=json");
  }

  getMusic(value):any {
    var url=`http://ws.audioscrobbler.com/2.0/?method=track.search&api_key=96e57f35a56ebc8ff8c03398d2fa94b2&track=${value}&format=json`;
    return this.http.get(url);
  }
  
  deleteMusic(value):any{
      
      console.log("Service delete"+value);
    this.http.delete(`http://localhost:8087/api/v1/deltrack/${value}`).subscribe();
   }

   getDetails(value1,value2):any{
     console.log("service details..",value1,value2);
     return this.http.get(`http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=96e57f35a56ebc8ff8c03398d2fa94b2&artist=${value1}&track=${value2}&format=json`);
   }

}



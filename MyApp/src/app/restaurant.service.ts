import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

//API key=bca77490c3f7713e48e7465f19a12dff;

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http:HttpClient) {}
     getAllRestaurants()
     {
     const httpOptions={
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'user-key': 'cbca77490c3f7713e48e7465f19a12dff'
       })
     };
     return this.http.get('https://developers.zomato.com/api/v2.1/search', httpOptions)

     }
   
}

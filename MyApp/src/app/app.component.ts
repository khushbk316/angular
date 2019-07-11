import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './restaurant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'My First Application';
  constructor(private service: RestaurantService){}
  restaurants = [];

  ngOnInit() {
    this.service.getAllRestaurants().subscribe((data:any) => {
      // console.log(data);
      console.log("first ")
      this.restaurants = data.restaurants;
      console.log("third")
    })
    console.log("second")
  }
  myFirstMethod()
  {
    console.log("This is getting executed");
    this.title="MyApplication";

  }
}

import { Component, OnInit } from '@angular/core';
import {MusicService} from '../music.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  
  constructor(private musicService:MusicService ,private route :Router) { }
  arrayOfMusic:any=[];
  ngOnInit() {
      this.musicService.getTrendMusic().subscribe(data=>
        {
            console.log(data.tracks.track);
            this.arrayOfMusic=data.tracks.track;
        });
  }
  click(value){
   
    this.route.navigateByUrl("/result/"+value);
    console.log("This Works");  
  }

  addToWishList(value) {
    // this.route.navigateByUrl("/addFav/"+value);
    console.log("Fav Works");
    let myMusic = {
      trackId:  value.listeners,
      trackName: value.name,
      comment: value.artist.name 
    }
    this.musicService.addToWishList(myMusic);
  }

  getDetails(music)
  {
    console.log("hjsabduiksdjlkmk"+music);
    console.log("hjsabdui"+music.name);
    console.log("hjsabdui"+music.artist.name);
    
    this.route.navigateByUrl("/details/"+music.artist.name +"/"+music.name)
    


    // addToWishList(value) {
    //   this.router.navigateByUrl("/addFav/"+value);
    //   console.log("Search Fav Works");
    // }
    
  }


 
}

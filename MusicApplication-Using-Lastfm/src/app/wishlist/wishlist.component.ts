import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(private musicService: MusicService, private route: ActivatedRoute, private location: Location,
    private router: Router) { }
  arrayOfMusic: any = [];

  ngOnInit() {
    this.musicService.getWishlist().subscribe((data) =>  {
      console.log("hiiiii",data);
      this.arrayOfMusic = data;
      
      console.log("helloooooo",this.arrayOfMusic);
    });


  }


  deleteMusic(obj):any{
    console.log("Inside Del fn...",obj.trackId);
    this.musicService.deleteMusic(obj.trackId);
    this.router.navigateByUrl("/home");



  }
}
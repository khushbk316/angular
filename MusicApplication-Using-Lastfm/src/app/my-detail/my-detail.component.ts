import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './my-detail.component.html',
  styleUrls: ['./my-detail.component.css']
})
export class MyDetailComponent implements OnInit {

  constructor(private musicService:MusicService, private route: ActivatedRoute,
    private router:Router) { }
  arrayOfMusic:any=[];


  ngOnInit() {
    this.getDetails();
  }
 getDetails():void{
    const artist=this.route.snapshot.paramMap.get('artist');
    const album=this.route.snapshot.paramMap.get('name');
    this.musicService.getDetails(artist,album).subscribe(data =>{
      console.log(data,"details,......");
      console.log(data.track.album)
      this.arrayOfMusic=data;
    });
  }
}


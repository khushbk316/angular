import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SearchResultComponent} from './search-result/search-result.component';
import { WishlistComponent } from './wishlist/wishlist.component';
// import { DetailsComponent } from './details/details.component';
import { MyDetailComponent } from './my-detail/my-detail.component';


const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/home'},
  {path:'home', component:HomeComponent},
  {path:'result/:name',component:SearchResultComponent},
  // {path :'addFav/'}
  {path: 'favs',component:WishlistComponent},
  {path:'details/:artist/:name',component:MyDetailComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

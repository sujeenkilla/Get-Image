import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { ProductComponent } from './components/product/product.component';
import { ProductcartComponent } from './components/productcart/productcart.component';
import { ImagedisplayComponent } from './components/imagedisplay/imagedisplay.component';

const routes: Routes = [
  {path : 'login' , component:LoginComponent},
  {path : 'signin', component:SigninComponent},
  {path : 'product',component:ProductComponent},
  {path : 'productcart',component:ProductcartComponent},
  {path : 'images',component:ImagedisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

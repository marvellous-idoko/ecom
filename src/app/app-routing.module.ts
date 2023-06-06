import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ShopXComponent } from './shop-x/shop-x.component';
import { ViewAllProdsComponent } from './view-all-prods/view-all-prods.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { MainStoreComponent } from './main-store/main-store.component';
import { GoodsDetailsComponent } from './goods-details/goods-details.component';

const routes: Routes = [
  
  {path: 'shop-one', component: HomeComponent},
  {path: 'shop-two', component: ShopXComponent},
  {path: 'admin', component: AdminComponent, children:[
    {path: 'viewAllProds', component: ViewAllProdsComponent},
    {path: 'createProduct', component: CreateProductComponent},
    {path: 'main-store', component: MainStoreComponent},

    
  ]},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'product-details/:id/:buy', component: GoodsDetailsComponent},
  {path: 'product-details/:id', component: GoodsDetailsComponent},
  {path: '', redirectTo: '/shop-one', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

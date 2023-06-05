import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule  } from '@angular/material/button'
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { GoodsDetailsComponent } from './goods-details/goods-details.component';
import { AdminComponent } from './admin/admin.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ViewAllProdsComponent } from './view-all-prods/view-all-prods.component';
import { ShopXComponent } from './shop-x/shop-x.component';
import { MainStoreComponent } from './main-store/main-store.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    GoodsDetailsComponent,
    AdminComponent,
    CreateProductComponent,
    ViewAllProdsComponent,
    ShopXComponent,
    MainStoreComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, 
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

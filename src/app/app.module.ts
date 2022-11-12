import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ApiCategoryComponent } from './api-category/api-category.component';
import { AraeComponent } from './arae/arae.component';
import { IntgreationComponent } from './intgreation/intgreation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ApiCategoryComponent,
    AraeComponent,
    IntgreationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , HttpClientModule , FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

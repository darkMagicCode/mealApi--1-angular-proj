import { HomeComponent } from './home/home.component';
import { IntgreationComponent } from './intgreation/intgreation.component';
import { AraeComponent } from './arae/arae.component';
import { ApiCategoryComponent } from './api-category/api-category.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path:"category" , component:ApiCategoryComponent},
  { path:"area" , component:AraeComponent},
  { path:"Intgreation" , component:IntgreationComponent},
  { path:"home" , component:HomeComponent}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

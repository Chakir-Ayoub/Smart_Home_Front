import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './views/categories/categories.component';
import { FormCategoriesComponent } from './views/categories/form-categories/form-categories.component';
import { RouterModule, Routes } from '@angular/router';
import { AppareilComponent } from './views/appareil/appareil.component';
import { FormAppareilComponent } from './views/appareil/form-appareil/form-appareil.component';

const routes: Routes = [

  {path:"",children:
  [
     {path:"",component:CategoriesComponent},
     {path:"create",component:FormCategoriesComponent},
     {path:"edit/:id",component:FormCategoriesComponent}
  ],canActivate:[]

 },
 {path:"appareil",children:[
  {path:"appareil/list/:id",component:AppareilComponent},
  {path:"create",component:FormAppareilComponent},
  {path:"edit/:id",component:FormAppareilComponent}
 ]}


 ]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]

})
export class AppRoutingModule { }

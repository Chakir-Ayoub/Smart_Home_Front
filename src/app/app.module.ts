import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { CategoriesComponent } from './views/categories/categories.component';
import { FormCategoriesComponent } from './views/categories/form-categories/form-categories.component';
import { AppareilComponent } from './views/appareil/appareil.component';
import { FormAppareilComponent } from './views/appareil/form-appareil/form-appareil.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { BasicHightLightDirectiveDirective } from './directive/BasicHightLightDirective/basic-hight-light-directive.directive';
import { BetterHightlightDirective } from './directive/BetterHightlightDirective/BetterHightlightDirective.directive';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoriesComponent,
    FormCategoriesComponent,
    AppareilComponent,
    FormAppareilComponent,
    BasicHightLightDirectiveDirective,
    BetterHightlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppareilModule } from '../appareil/appareil.module';



export class CategoriesModule {
         id:Number;
         label:String;
         appareils:AppareilModule[];
}

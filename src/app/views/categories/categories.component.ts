import { CategoriesModule } from 'src/app/Models/categories/categories.module';
import { CategoriesService } from './../../service/categories.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormCategoriesComponent } from './form-categories/form-categories.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(
              private categoriesService:CategoriesService,
              private _dialog: MatDialog,

    ){
    }
  categories:CategoriesModule[]=[];
  ngOnInit(): void {
  this.GetAll();
  }

  GetAll(){
    this.categoriesService.GetAll().subscribe(item=>{
  this.categories=item;
    },error=>{
      console.log(error);
    })
  }

  openAddForm() {
    const dialogRef = this._dialog.open(FormCategoriesComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.GetAll();
        }
      },
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(FormCategoriesComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.GetAll();
        }
      },
    });
  }

  Delete(id:Number){
    Swal.fire({
      title: 'Es-tu sûr?',
      text: "Vous ne pourrez pas revenir en arrière!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimez-la !'
    }).then((result) => {
      if (result.isConfirmed) {
        this.categoriesService.DeleteCategorie(id).subscribe(data => {
          console.log(data);
          this.GetAll();
        });
        Swal.fire(
          'Deleted!',

          'The User has been deleted.',
          'success'
        )
      }
    })
  this.categoriesService.DeleteCategorie(id);

  }





}

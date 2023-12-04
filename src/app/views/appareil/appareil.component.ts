import { CategoriesService } from './../../service/categories.service';
import { AppareilModule } from 'src/app/Models/appareil/appareil.module';
import { AppareilService } from './../../service/appareil.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesModule } from 'src/app/Models/categories/categories.module';
import { MatDialog } from '@angular/material/dialog';
import { FormAppareilComponent } from './form-appareil/form-appareil.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {
  test:boolean;
  constructor(
              private appareilService:AppareilService,
              private _route : ActivatedRoute,
              private categoriesService:CategoriesService,
              private _dialog: MatDialog){}
  categorie_Id:Number;
  categories:CategoriesModule;
  ngOnInit(): void {
    this._route.params.subscribe((params)=>{ this.categorie_Id =params['id'];});
    this.getById();
  this.GetIdCategories();
  }


  getById(){
  this.categoriesService.GetById(this.categorie_Id).subscribe(item=>{
  this.categories=item;
  },error=>{
    console.log(error)
  });
  }

  openAddForm() {
    const dialogRef = this._dialog.open(FormAppareilComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getById();
        }
      },
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(FormAppareilComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getById();
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
        this.appareilService.DeleteAppareil(id).subscribe(data => {
          console.log(data);
          this.getById();
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

  GetIdCategories(){
    this.categoriesService.categories=this.categorie_Id;
  }
}

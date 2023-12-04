import { AppareilService } from './../../../service/appareil.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/service/categories.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-appareil',
  templateUrl: './form-appareil.component.html',
  styleUrls: ['./form-appareil.component.css']
})
export class FormAppareilComponent implements OnInit {
  AppareilForm: FormGroup;
  categorie_Id:Number;
  constructor(
    private _fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _dialogRef: MatDialogRef<FormAppareilComponent>,
    private appareil:AppareilService,
    private categories_service:CategoriesService,
    private _route : ActivatedRoute,

  ){
    this.AppareilForm=this._fb.group({
      'label': '',
      'description':'',
      'state':'',
      'image':''
      });
  }
  ngOnInit(): void {
    this.AppareilForm.patchValue(this.data);
    this._route.params.subscribe((params)=>{ this.categorie_Id =params['id'];});

  }

  onFormSubmit() {
    if (this.AppareilForm.valid) {
      if (this.data) {
        this.appareil
          .updateAppareil(this.data.id, this.AppareilForm.value)
          .subscribe({
            next: (val: any) => {
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Appareil Modifie avec succès',
                showConfirmButton: false,
                timer: 1500
              });
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this.appareil.addAppareil(this.categories_service.categories,this.AppareilForm.value).subscribe({
          next: (val: any) => {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Appareil ajoutée avec succès',
              showConfirmButton: false,
              timer: 1500
            });
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }
}

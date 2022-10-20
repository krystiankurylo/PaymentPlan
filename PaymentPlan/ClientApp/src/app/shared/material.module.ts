import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material';
import { MatTableDataSource } from '@angular/material';
import { PageEvent } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field'

@NgModule({
  imports: [
    CommonModule,
    MatSliderModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule
  ],
  exports: [
    MatSliderModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule
  ]
})
export class MaterialModule { }

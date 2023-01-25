import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list.component';


@NgModule({
  declarations: [
    StudentComponent,
    StudentListComponent
  ],
  exports: [
    StudentListComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }

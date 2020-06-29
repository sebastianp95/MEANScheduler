import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { CourselistService } from './courselist.service';
import { CoursesComponent } from './courses/courses.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { CourselistService } from './courselist.service';



@NgModule({

  imports: [
    CommonModule,
    CoursesRoutingModule

  ],
  declarations: [

  ]
})
export class CoursesModule {
   constructor(private courselistService: CourselistService) { }

}

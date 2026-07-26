import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';
import { RouterLink } from '@angular/router';


@Component({

selector:'app-courses',

standalone:true,

imports:[
 CommonModule,
 RouterLink
],

templateUrl:'./courses.html',

styleUrl:'./courses.css'

})
export class CoursesComponent implements OnInit {


courses: Course[] = [];


constructor(
 private courseService: CourseService
){}



ngOnInit(){

 this.courses = this.courseService.getCourses();

}


}
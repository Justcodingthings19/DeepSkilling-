import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/course.model';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseListComponent {

  courses: Course[] = [

    {
      id:1,
      name:"Angular Development",
      instructor:"John Smith",
      duration:"3 Months",
      credits:4,
      description:"Learn Angular framework and build real applications."
    },

    {
      id:2,
      name:"Java Programming",
      instructor:"David Miller",
      duration:"4 Months",
      credits:5,
      description:"Learn Java programming from basics to advanced."
    },

    {
      id:3,
      name:"Database Management",
      instructor:"Robert Brown",
      duration:"2 Months",
      credits:3,
      description:"Learn SQL and database concepts."
    }

  ];

}
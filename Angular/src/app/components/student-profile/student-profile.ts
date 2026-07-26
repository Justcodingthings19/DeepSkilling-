import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-profile.html',
  styleUrl: './student-profile.css'
})
export class StudentProfileComponent {

  studentName = "Renuka";

  courses: Course[] = [
    {
      id: 1,
      code: "ANG101",
      name: "Angular",
      credits: 4,
      gradeStatus: "Active"
    },
    {
      id: 2,
      code: "JAVA101",
      name: "Java",
      credits: 5,
      gradeStatus: "Completed"
    }
  ];

}
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './enrollment-form.html',
  styleUrl: './enrollment-form.css'
})
export class EnrollmentFormComponent {

  studentName: string = '';
  email: string = '';
  course: string = '';

  enroll() {
    alert(
      `Enrollment Successful!\nName: ${this.studentName}\nCourse: ${this.course}`
    );
  }

}